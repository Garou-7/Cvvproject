<?php
$host = '127.0.0.1';
$db   = 'portfolio_db';
$user = 'root';
$pass = '';  // ← впиши свой пароль от MySQL Workbench

try {
    $pdo = new PDO("mysql:host=$host;port=3306;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die(json_encode(['error' => 'Connection failed: ' . $e->getMessage()]));
}
?>