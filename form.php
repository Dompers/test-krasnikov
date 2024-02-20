<?php

if (!empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['pass'];
    $city = $_POST['city'];


    $toEmail = $email;
    $emailSubject = 'New email from your contact form';
    $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=utf-8'];
    $bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Message:", 'Name: ' . $name . '\r\n' . 'Email: ' . $email . '\r\n' . 'Phone: ' . $phone . '\r\n' . 'Password: ' . $password . '\r\n' . 'City: ' . $city];
    $body = join(PHP_EOL, $bodyParagraphs);

    mail($toEmail, $emailSubject, $body, $headers);
}
