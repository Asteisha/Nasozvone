(<?php

$conn = new mysqli("localhost", "root", "", "n916881p_mobile");

// Проверка соединения
if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
} else {
    echo "Подключение к базе данных успешно!<br>";
}


// Здесь можно выполнять операции с базой данных, например, извлечение данных или запись
$sql = "SELECT id, name, price FROM products";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h2>Каталог продуктов</h2>";
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Название: " . $row["name"]. " - Цена: $" . $row["price"]. "<br>";
    }
} else {
    echo "Нет продуктов в каталоге";
}

$conn->close();
?>
)