<?php
// API pública de vehículos.
//   GET  -> devuelve el array de coches (JSON)   [público]
//   POST -> reemplaza todo el stock              [requiere contraseña admin]
// Body POST: { "password": "...", "vehicles": [ ... ] }
require_once __DIR__ . '/db.php';
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$method = $_SERVER['REQUEST_METHOD'];

try {
  $pdo = db();

  if ($method === 'GET') {
    $rows = $pdo->query('SELECT data FROM ' . TABLE . ' ORDER BY sort ASC, id ASC')->fetchAll();
    $out = [];
    foreach ($rows as $r) { $out[] = json_decode($r['data'], true); }
    echo json_encode($out, JSON_UNESCAPED_UNICODE);
    exit;
  }

  if ($method === 'POST') {
    $raw = file_get_contents('php://input');
    $body = json_decode($raw, true);
    if (!is_array($body)) { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'JSON inválido']); exit; }

    if (!isset($body['password']) || !hash_equals(ADMIN_PASSWORD, (string)$body['password'])) {
      http_response_code(401); echo json_encode(['ok'=>false,'error'=>'No autorizado']); exit;
    }
    $vehicles = isset($body['vehicles']) && is_array($body['vehicles']) ? $body['vehicles'] : null;
    if ($vehicles === null) { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'Falta vehicles']); exit; }

    $pdo->beginTransaction();
    $pdo->exec('DELETE FROM ' . TABLE);
    $stmt = $pdo->prepare('INSERT INTO ' . TABLE . ' (id, sort, sold, reserved, featured, data) VALUES (?,?,?,?,?,?)');
    $i = 0;
    foreach ($vehicles as $v) {
      if (!isset($v['id'])) { continue; }
      $stmt->execute([
        (int)$v['id'],
        $i++,
        !empty($v['sold']) ? 1 : 0,
        !empty($v['reserved']) ? 1 : 0,
        !empty($v['featured']) ? 1 : 0,
        json_encode($v, JSON_UNESCAPED_UNICODE),
      ]);
    }
    $pdo->commit();
    echo json_encode(['ok'=>true, 'count'=>$i]);
    exit;
  }

  http_response_code(405);
  echo json_encode(['ok'=>false,'error'=>'Método no permitido']);
} catch (Throwable $e) {
  if (isset($pdo) && $pdo->inTransaction()) { $pdo->rollBack(); }
  http_response_code(500);
  echo json_encode(['ok'=>false,'error'=>'Error de servidor']);
}
