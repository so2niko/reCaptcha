<?php
$response = $_GET['response'];
$secret = '6Lfelq8ZAAAAAEP-U5z30gOI19Jdsh9A8vbIMTpP';

$base = 'https://www.google.com/recaptcha/api/siteverify'; 
$url = $base . '?secret=' . $secret . '&response=' . $response;

$result = file_get_contents($url);

file_put_contents('result.txt', $result);

echo $result;