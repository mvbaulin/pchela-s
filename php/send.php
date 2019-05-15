<?php

// Почта на которую отправится писмьо

$adminEmail = "pereezd@pchela-s.ru";

// Данные с формы

$fullname = $_POST['fullname'];
$phoneNumber = $_POST['phone-number'];
$msg = $_POST['echo-form__message'];

// Декодирование символов

$fullname = htmlspecialchars($fullname);
$phoneNumber = htmlspecialchars($phoneNumber);
$msg = htmlspecialchars($msg);

$fullname = urldecode($fullname);
$phoneNumber = urldecode($phoneNumber);
$msg = urldecode($msg);

$msg = "Имя: $fullname, Номер телефона: $phoneNumber
Текст сообщения: $msg";

if (mail("$adminEmail", "Заказан переезд", "$msg")) {
    echo "Данные успешно отправлены";
    // header("Location: https://www.sitename.com/thank-you");
} else {
    echo "Произошла ошибка при отправке данных";
}