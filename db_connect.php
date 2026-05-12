<?php
$host = 'localhost';
$db   = 'portfolio_db';
$user = 'root';
$pass = '$2y$12$l/Fcdnlx8DVRTSyXwjMAHeysWi9k6KJWhg8r.sV6B2rWXTRsOMGsu';
$port = '3306';

try {
    $pdo = new PDO(
        "mysql:host=$host;port=$port;dbname=$db;charset=utf8",
        $user,
        $pass
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}
?>