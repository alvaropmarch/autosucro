<?php
// Subida de fotos del admin.
//   POST multipart:  password=<admin>, photo=<fichero>, slug=<carpeta destino>
//   ->  { "ok":true, "path":"images/coches/<slug>/<hash>.jpg", "w":1600, "h":1200 }
//
// Las fotos se guardan como FICHEROS REALES y la base de datos solo almacena la ruta.
// Así el JSON de /api/vehiculos.php se mantiene pequeño y el navegador cachea las fotos.
//
// Seguridad: aparte de la contraseña, cada imagen se valida con getimagesize() y se
// RE-CODIFICA con GD antes de escribirla. Lo que acaba en disco es un JPEG nuevo
// generado por el servidor, nunca los bytes que mandó el cliente, así que un fichero
// "polyglot" (imagen que además es PHP) no sobrevive. El destino lleva además un
// .htaccess que prohíbe servir/ejecutar scripts.

require_once __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const MAX_BYTES = 15 * 1024 * 1024;  // por foto, antes de redimensionar
const MAX_EDGE  = 1600;              // lado largo del JPEG resultante
const QUALITY   = 82;

function fail($code, $msg) {
  http_response_code($code);
  echo json_encode(['ok' => false, 'error' => $msg], JSON_UNESCAPED_UNICODE);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') fail(405, 'Método no permitido');

if (!defined('ADMIN_PASSWORD') || !hash_equals(ADMIN_PASSWORD, (string)($_POST['password'] ?? ''))) {
  fail(401, 'No autorizado');
}

// ── Carpeta destino: images/coches/<slug>, con el slug saneado a [a-z0-9-] ──
$slug = (string)($_POST['slug'] ?? '');
if (function_exists('iconv')) {
  $t = @iconv('UTF-8', 'ASCII//TRANSLIT', $slug);
  if ($t !== false) $slug = $t;
}
$slug = strtolower($slug);
$slug = preg_replace('/[^a-z0-9]+/', '-', $slug);
$slug = trim((string)$slug, '-');
if ($slug === '') $slug = 'varios';
$slug = substr($slug, 0, 60);

$baseDir = realpath(__DIR__ . '/..');
if ($baseDir === false) fail(500, 'No se encuentra la raíz del site');
$destDir = $baseDir . '/images/coches/' . $slug;

if (!is_dir($destDir) && !@mkdir($destDir, 0755, true) && !is_dir($destDir)) {
  fail(500, 'No se pudo crear la carpeta de destino');
}

// ── Validación del fichero recibido ──
if (!isset($_FILES['photo'])) fail(400, 'No se recibió ninguna foto');
$f = $_FILES['photo'];

if (($f['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
  $motivos = [
    UPLOAD_ERR_INI_SIZE   => 'La foto supera el máximo que admite el servidor',
    UPLOAD_ERR_FORM_SIZE  => 'La foto es demasiado grande',
    UPLOAD_ERR_PARTIAL    => 'La subida se interrumpió, inténtalo de nuevo',
    UPLOAD_ERR_NO_FILE    => 'No se recibió ninguna foto',
    UPLOAD_ERR_NO_TMP_DIR => 'Error de configuración del servidor',
    UPLOAD_ERR_CANT_WRITE => 'El servidor no pudo escribir la foto',
  ];
  fail(400, $motivos[$f['error']] ?? 'Error al subir la foto');
}
if (!is_uploaded_file($f['tmp_name'])) fail(400, 'Subida no válida');
if ($f['size'] > MAX_BYTES)            fail(413, 'La foto no puede superar 15 MB');

$info = @getimagesize($f['tmp_name']);
if ($info === false) fail(415, 'El fichero no es una imagen válida');

$srcW = $info[0];
$srcH = $info[1];
$type = $info[2];
if ($srcW < 1 || $srcH < 1) fail(415, 'Imagen con dimensiones no válidas');
if ($srcW * $srcH > 50000000) fail(413, 'La imagen tiene demasiados píxeles');

if (!function_exists('imagecreatetruecolor')) fail(500, 'GD no está disponible en el servidor');

// ── Decodificar ──
switch ($type) {
  case IMAGETYPE_JPEG: $src = @imagecreatefromjpeg($f['tmp_name']); break;
  case IMAGETYPE_PNG:  $src = @imagecreatefrompng($f['tmp_name']);  break;
  case IMAGETYPE_GIF:  $src = @imagecreatefromgif($f['tmp_name']);  break;
  case IMAGETYPE_WEBP:
    $src = function_exists('imagecreatefromwebp') ? @imagecreatefromwebp($f['tmp_name']) : false;
    break;
  default: fail(415, 'Formato no admitido: usa JPG, PNG o WEBP');
}
if (!$src) fail(415, 'No se pudo leer la imagen');

// ── Girar según EXIF (fotos hechas con el móvil) ──
if ($type === IMAGETYPE_JPEG && function_exists('exif_read_data')) {
  $exif = @exif_read_data($f['tmp_name']);
  $or   = isset($exif['Orientation']) ? (int)$exif['Orientation'] : 1;
  $giros = array(3 => 180, 6 => -90, 8 => 90);
  $ang  = isset($giros[$or]) ? $giros[$or] : 0;
  if ($ang !== 0) {
    $rot = @imagerotate($src, $ang, 0);
    if ($rot) { imagedestroy($src); $src = $rot; $srcW = imagesx($src); $srcH = imagesy($src); }
  }
}

// ── Redimensionar manteniendo proporción ──
$scale = min(1, MAX_EDGE / max($srcW, $srcH));
$dstW  = max(1, (int)round($srcW * $scale));
$dstH  = max(1, (int)round($srcH * $scale));

$dst = imagecreatetruecolor($dstW, $dstH);
// El resultado es JPEG (sin alfa): fondo blanco para PNG/WEBP transparentes.
imagefilledrectangle($dst, 0, 0, $dstW, $dstH, imagecolorallocate($dst, 255, 255, 255));
imagecopyresampled($dst, $src, 0, 0, 0, 0, $dstW, $dstH, $srcW, $srcH);
imagedestroy($src);

// ── Escribir con nombre aleatorio (evita colisiones y adivinar rutas) ──
$name = bin2hex(random_bytes(8)) . '.jpg';
$path = $destDir . '/' . $name;
$ok   = imagejpeg($dst, $path, QUALITY);
imagedestroy($dst);

if (!$ok || !is_file($path)) fail(500, 'No se pudo guardar la foto');
@chmod($path, 0644);

echo json_encode([
  'ok'    => true,
  'path'  => 'images/coches/' . $slug . '/' . $name,
  'w'     => $dstW,
  'h'     => $dstH,
  'bytes' => filesize($path),
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
