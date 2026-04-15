<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

$requestId = bin2hex(random_bytes(8));

$allowedOrigins = [
    'http://localhost:5173',
    'https://partylounges.com',
    'https://www.partylounges.com'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Vary: Origin');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

/**
 * ✅ FIXED AUTOLOAD PATH
 */
require __DIR__ . '/vendor/autoload.php';

/**
 * ✅ SMTP CONFIG (use your app password)
 */
$smtpUser = 'hello@partylounges.com';
$smtpPass = 'P902cf2PpG7A';

/**
 * ❌ DO NOT DEPLOY WITH PLACEHOLDER
 */
if ($smtpPass === 'PUT_YOUR_APP_PASSWORD_HERE') {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'SMTP password not configured',
        'request_id' => $requestId
    ]);
    exit;
}

/**
 * ✅ PARSE INPUT
 */
$input = json_decode(file_get_contents('php://input'), true) ?? [];

$name = trim($input['name'] ?? '');
$phone = trim($input['phone'] ?? '');
$date = trim($input['date'] ?? '');
$pax = trim($input['pax'] ?? '');
$look = trim($input['look'] ?? '');
$venue = trim($input['venue'] ?? '');
$seating = trim($input['seating'] ?? '');

if ($name === '' || $phone === '') {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Missing required fields',
        'request_id' => $requestId
    ]);
    exit;
}

/**
 * ✅ SANITIZE
 */
$esc = fn($v) => htmlspecialchars($v, ENT_QUOTES, 'UTF-8');

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.zoho.com';
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->setFrom($smtpUser, 'Party Lounges Website');

    /**
     * ✅ EXPLICIT RECIPIENT
     */
    $mail->addAddress('hello@partylounges.com');

    $mail->Subject = "New Quote Request from {$name}";
    $mail->isHTML(true);

    $mail->Body = "
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> {$esc($name)}</p>
        <p><strong>Phone:</strong> {$esc($phone)}</p>
        <p><strong>Date:</strong> {$esc($date)}</p>
        <p><strong>Pax:</strong> {$esc($pax)}</p>
        <p><strong>Look:</strong> {$esc($look)}</p>
        <p><strong>Venue:</strong> {$esc($venue)}</p>
        <p><strong>Seating:</strong> {$esc($seating)}</p>
    ";

    $mail->send();

    echo json_encode([
        'status' => 'success',
        'request_id' => $requestId
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $mail->ErrorInfo,
        'request_id' => $requestId
    ]);
}