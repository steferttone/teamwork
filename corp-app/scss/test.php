<?php

$sendEmail = "treeincupmri@gmail.com";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $type = trim($_POST["type"]);
    if ($type == "callback"){
        $email = trim($_POST["email"]);
        $phone = trim($_POST["phone"]);
        $question = trim($_POST["question"]);

        if (filter_var($email, FILTER_SANITIZE_EMAIL)){
            $subject="Вопрос от ".$email;
            $email_content = "
                <html>
                <head>
                <title>Вопрос</title>
                </head>
                <body>
                    <p style='margin:0px;'>Телефон: $phone;</p>
                    <p style='margin:0px;'>E-mail: $email.</p>
                    <p style='margin:0px;'>Вопрос: $question;</p>
                </body>
                </html>
            ";
            sendMail($sendEmail,$subject,$email_content);
        }
    }else if ($type == "order"){
        $email = trim($_POST["email"]);
        $phone = trim($_POST["phone"]);
        $typeWork = trim($_POST["typeWork"]);
        $comment = "";

        if (isset($_POST["comment"])){
            $commText = trim($_POST["comment"]);
            $comment = "<span>Комментарий:</span><p>$commText</p>";
        }

        if (filter_var($email, FILTER_SANITIZE_EMAIL)){
            $subject="Запрос от ".$email;
            $email_content = "
                <html>
                <head>
                <title>$typeWork</title>
                </head>
                <body>
                    <h1>Заказ вёрстки</h1>
                    <p style='margin:0px;'>Телефон: $phone;</p>
                    <p style='margin:0px;'>E-mail: $email/</p>
                    <p style='margin:0px;'>Тип Вёрстки: $typeWork.</p>
                    $comment
                </body>
                </html>
            ";
            sendMail($sendEmail,$subject,$email_content);
        }else{
            echo "Вашь email не корректный !";
        }
    }
} else {
    http_response_code(403);
    echo "Произошла ошибка, у вас нет прав доступа, попробуйте позже.";
}

function sendMail($email,$subject,$email_content){
        $email_headers = "From: tinc.by <$email>";
        $email_headers .= "MIME-Version: 1.0" . "\r\n";
        $email_headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        /*$email_headers.="Content-type: text/html; charset=\"utf-8\"";*/

        if (mail($email, $subject, $email_content, $email_headers)) {
            http_response_code(200);
        } else {
            http_response_code(500);
        }
}
?>