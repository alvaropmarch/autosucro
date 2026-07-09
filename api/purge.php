<?php
// Purga la Caché Dinámica de SiteGround tras cada deploy.
// Se llama desde el workflow: /api/purge.php?key=<token>
// El token vive en purge.key (fuera de git). Purgar solo vacía caché -> bajo riesgo.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate');

$keyFile  = __DIR__ . '/purge.key';
$expected = is_file($keyFile) ? trim(file_get_contents($keyFile)) : '';
$given    = trim($_GET['key'] ?? '');
if ($expected === '' || !hash_equals($expected, $given)) {
  http_response_code(403); echo json_encode(['ok'=>false,'error'=>'forbidden']); exit;
}

// La caché dinámica de SiteGround solo cachea la home ("/"); las .html las sirve
// NGINX Direct Delivery (siempre frescas). Se purgan ambos hosts por si acaso.
$hosts = ['autosucro.es', 'www.autosucro.es'];
$paths = ['/'];
if (!empty($_GET['paths'])) { $paths = array_map('trim', explode(',', $_GET['paths'])); }

function purge($scheme, $host, $path) {
  $ch = curl_init($scheme . '://127.0.0.1' . $path);
  curl_setopt_array($ch, [
    CURLOPT_CUSTOMREQUEST => 'PURGE',
    CURLOPT_HTTPHEADER    => ['Host: ' . $host],
    CURLOPT_RETURNTRANSFER=> true,
    CURLOPT_TIMEOUT       => 10,
    CURLOPT_SSL_VERIFYPEER=> false,
    CURLOPT_SSL_VERIFYHOST=> 0,
  ]);
  $b = curl_exec($ch); $c = curl_getinfo($ch, CURLINFO_HTTP_CODE); curl_close($ch);
  return (stripos((string)$b, 'Successful') !== false) || $c === 200;
}

$out = []; $anyOk = false;
foreach ($hosts as $host) {
  foreach ($paths as $p) {
    $ok = purge('http', $host, $p) || purge('https', $host, $p);
    $anyOk = $anyOk || $ok;
    $out[$host . $p] = $ok ? 'purged' : 'skip';
  }
}
echo json_encode(['ok'=>$anyOk, 'result'=>$out], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
