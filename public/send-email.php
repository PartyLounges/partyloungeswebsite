<?php
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

$composerAutoload = dirname(__DIR__) . '/vendor/autoload.php';

if (!file_exists($composerAutoload)) {
    error_log("[quote-form][$requestId] Composer autoload not found");
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Mailer dependency missing. Run composer install and deploy the vendor folder.',
        'request_id' => $requestId
    ]);
    exit;
}

require $composerAutoload;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$input = json_decode(file_get_contents('php://input'), true) ?? [];

$name = trim($input['name'] ?? '');
$phone = trim($input['phone'] ?? '');
$date = trim($input['date'] ?? '');
$pax = trim($input['pax'] ?? '');
$look = trim($input['look'] ?? '');
$venue = trim($input['venue'] ?? '');
$seating = trim($input['seating'] ?? '');

if ($name === '' || $phone === '') {
    error_log("[quote-form][$requestId] Validation failed: missing name or phone");
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Missing required fields',
        'request_id' => $requestId
    ]);
    exit;
}

$smtpUser = getenv('ZOHO_SMTP_USER') ?: 'hello@partylounges.com';
$smtpPass = getenv('ZOHO_SMTP_PASSWORD') ?: 'PUT_ZOHO_APP_PASSWORD_HERE';

if ($smtpPass === 'PUT_ZOHO_APP_PASSWORD_HERE') {
    error_log("[quote-form][$requestId] SMTP password not configured");
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'SMTP password is not configured on the server',
        'request_id' => $requestId
    ]);
    exit;
}

$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safePhone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$safeDate = htmlspecialchars($date, ENT_QUOTES, 'UTF-8');
$safePax = htmlspecialchars($pax, ENT_QUOTES, 'UTF-8');
$safeLook = htmlspecialchars($look, ENT_QUOTES, 'UTF-8');
$safeVenue = htmlspecialchars($venue, ENT_QUOTES, 'UTF-8');
$safeSeating = htmlspecialchars($seating, ENT_QUOTES, 'UTF-8');

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.zoho.com';
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($smtpUser, 'Party Lounges Website');
    $mail->addAddress($smtpUser);

    $mail->Subject = "New Quote Request from {$name}";
    $mail->isHTML(true);

    $mail->Body = "
<h2>New Quote Request</h2>
<p><strong>Name:</strong> {$safeName}</p>
<p><strong>Phone:</strong> {$safePhone}</p>
<p><strong>Date:</strong> {$safeDate}</p>
<p><strong>Number of Pax:</strong> {$safePax}</p>
<p><strong>Look &amp; Feel:</strong> {$safeLook}</p>
<p><strong>Venue:</strong> {$safeVenue}</p>
<p><strong>Seating Style:</strong> {$safeSeating}</p>
";

    $mail->AltBody = "
New Quote Request
Name: {$name}
Phone: {$phone}
Date: {$date}
Number of Pax: {$pax}
Look & Feel: {$look}
Venue: {$venue}
Seating Style: {$seating}
";

    $mail->send();

    error_log("[quote-form][$requestId] Email sent successfully for {$phone}");
    echo json_encode([
        'status' => 'success',
        'request_id' => $requestId,
        'message' => 'Request received successfully. Our team will call you back soon.'
    ]);
} catch (Exception $e) {
    error_log("[quote-form][$requestId] Email sending failed: {$mail->ErrorInfo}");
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Email sending failed',
        'debug' => $mail->ErrorInfo,
        'request_id' => $requestId
    ]);
}
