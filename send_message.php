<?php
require 'db_connect.php';
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email   = htmlspecialchars(trim($_POST['email'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['status' => 'error', 'message' => 'Fill all fields!']);
        exit;
    }

    $stmt = $pdo->prepare(
        "INSERT INTO messages (name, email, reason, message) VALUES (?, ?, ?, ?)"
    );
    $stmt->execute([$name, $email, $message]);

    echo json_encode(['status' => 'success', 'message' => 'Message sent!']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
}
?>