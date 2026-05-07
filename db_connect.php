<?php
$host = 'localhost';
$db   = 'portfolio_db';
$user = 'root';
$pass = 'ygadaikto7';
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

echo password_hash('ygadaikto', PASSWORD_DEFAULT);
?>