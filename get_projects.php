<?php
require 'db_connect.php';
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$stmt = $pdo->query("SELECT * FROM projects ORDER BY created_at DESC");
$projects = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($projects);
?>