<?php
$sendEmail = "info@tinc.by";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $content = trim(file_get_contents("php://input"));
        $array = json_decode($content, true);
        
        $firstName = trim($array["firstName"]);
        $email = trim($array["email"]);
        $phone = trim($array["phone"]);
        $subject = trim($array["subject"]);
        $message = trim($array["message"]);
        


        $email_content = "
                <html>
                <head>
                <title>Заказать услугу</title>
                </head>
                <body>
                    <h1>$subject</h1><br>";
                    $email_content .= "<p style='margin:0px;'>ФИО: $firstName;</p>";
                    $email_content .= "<p style='margin:0px;'>Телефон: $phone;</p>";
                    $email_content .= "<p style='margin:0px;'>E-mail: $email.</p>";
                    $email_content .= "<p style='margin:0px;'>Сообщение: <br>$message.</p>
                </body>
                </html>";
        if ($email != ""){
            if (filter_var($email, FILTER_SANITIZE_EMAIL)){
                sendMail($sendEmail,$subject,$email_content);
            }else{
                echo "Вашь email не корректный!";
            }
        }else{
            sendMail($sendEmail,$subject,$email_content);
        }
} else {
    http_response_code(403);
    echo "Произошла ошибка, у вас нет прав доступа, попробуйте позже.";
}

function sendMail($email,$subject,$email_content){

        $email_headers = "From: TeamWork <$email>";
        $email_headers .= "MIME-Version: 1.0" . "\r\n";
        $email_headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        if (mail($email, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Спасибо, за вашу заявку мы вам перезвоним!";
        } else {
            http_response_code(500);
            echo "Ошибка, что-то пошло не так, запрос не отправлен!";
        }
}
?>
