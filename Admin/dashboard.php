<?php
session_start();

if (!isset($_SESSION['admin'])) {
    header('Location: index.php');
    exit;
}

require '../db_connect.php';

// Добавление нового проекта
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_project'])) {
    $title       = htmlspecialchars(trim($_POST['title'] ?? ''));
    $description = htmlspecialchars(trim($_POST['description'] ?? ''));
    $tech_stack  = htmlspecialchars(trim($_POST['tech_stack'] ?? ''));
    $github_link = htmlspecialchars(trim($_POST['github_link'] ?? ''));

    $stmt = $pdo->prepare(
        "INSERT INTO projects (title, description, tech_stack, github_link) VALUES (?, ?, ?, ?)"
    );
    $stmt->execute([$title, $description, $tech_stack, $github_link]);
}

// Удаление проекта
if (isset($_GET['delete'])) {
    $id = (int)$_GET['delete'];
    $pdo->prepare("DELETE FROM projects WHERE id = ?")->execute([$id]);
}

// Получаем все проекты
$projects = $pdo->query("SELECT * FROM projects ORDER BY created_at DESC")->fetchAll(PDO::FETCH_ASSOC);

// Получаем все сообщения
$messages = $pdo->query("SELECT * FROM messages ORDER BY created_at DESC")->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <nav>
        <div class="logo">Admin<span class="highlight">Panel</span></div>
        <ul>
            <li><a href="../index.html">View Site</a></li>
            <li><a href="logout.php">Logout</a></li>
        </ul>
    </nav>

    <main>
        <!-- Добавить проект -->
        <section class="glass-panel">
            <h2>Add New Project</h2>
            <form method="POST">
                <input type="text" name="title" placeholder="Project Title" required>
                <input type="text" name="description" placeholder="Description" required>
                <input type="text" name="tech_stack" placeholder="Tech Stack (e.g. HTML, CSS, JS)">
                <input type="text" name="github_link" placeholder="GitHub Link">
                <button type="submit" name="add_project">Add Project</button>
            </form>
        </section>

        <!-- Список проектов -->
        <section class="glass-panel">
            <h2>My Projects</h2>
            <?php if (empty($projects)): ?>
                <p>No projects yet. Add one above!</p>
            <?php else: ?>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Tech Stack</th>
                        <th>Action</th>
                    </tr>
                    <?php foreach ($projects as $project): ?>
                    <tr>
                        <td><?= $project['title'] ?></td>
                        <td><?= $project['tech_stack'] ?></td>
                        <td>
                            <a href="?delete=<?= $project['id'] ?>" 
                               style="color: red;"
                               onclick="return confirm('Delete this project?')">
                               Delete
                            </a>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </table>
            <?php endif; ?>
        </section>

        <!-- Входящие сообщения -->
        <section class="glass-panel">
            <h2>Incoming Messages</h2>
            <?php if (empty($messages)): ?>
                <p>No messages yet.</p>
            <?php else: ?>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                    <?php foreach ($messages as $msg): ?>
                    <tr>
                        <td><?= $msg['name'] ?></td>
                        <td><?= $msg['email'] ?></td>
                        <td><?= $msg['message'] ?></td>
                        <td><?= $msg['created_at'] ?></td>
                    </tr>
                    <?php endforeach; ?>
                </table>
            <?php endif; ?>
        </section>
    </main>
</body>
</html>