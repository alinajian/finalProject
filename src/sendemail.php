<?php

/**
 * Send email by Ajax in PHP
 * 
 * @see https://daskhat.ir/?p=1205
 * @copyright Daskhat
 * @version 1.0.0
 * 
 */

// Here we get all the information from the fields sent over by the form.
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'ali.najian69@gmail.com';
$subject = 'the subject';
$headers = 'From: ali.najian69@gmail.com' . "\r\n";


if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
    if (!empty($message) && !empty($name)) {
        $message = 'FROM: ' . $name .  ' Email: ' . $email . 'Message: ' . $message . 'Order:' . $order . 'Plan:' . $plan;
        if (@mail($to, $subject, $message, $headers)) {//This method sends the mail.
            echo "Your Message was sent!"; // success message
        } else {
            echo "An error ocurred on sending Message. ";
        }
    } else {
        echo "Please fill all fields.";
    }
} else {
    echo "Invalid Message, please provide an correct Message.";
}