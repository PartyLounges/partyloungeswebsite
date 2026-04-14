# Local Email Testing Guide

This project supports local end-to-end quote form testing via:
- React dev server at `http://localhost:5173`
- PHP built-in server at `http://127.0.0.1:8000`
- Vite proxy from `/send-email.php` to `127.0.0.1:8000`

## One-time setup

1. Install JS dependencies:

```bash
npm install
```

2. Ensure PHP dependencies exist:

```bash
composer install
```

## Run locally (two terminals)

### Terminal 1: Start PHP server with SMTP credentials

```bash
cd /Users/nemwel/rhino/partyloungeswebsite
export ZOHO_SMTP_USER="hello@partylounges.com"
export ZOHO_SMTP_PASSWORD="YOUR_ZOHO_APP_SPECIFIC_PASSWORD"
php -S 127.0.0.1:8000 -t public
```

### Terminal 2: Start Vite app

```bash
cd /Users/nemwel/rhino/partyloungeswebsite
npm run dev
```

Then open:

- `http://localhost:5173`

Submit the quote form from the Contact page.

## Why this works

- The form posts to `/send-email.php`.
- In development, Vite forwards that route to the local PHP server.
- `send-email.php` reads:
  - `ZOHO_SMTP_USER`
  - `ZOHO_SMTP_PASSWORD`

## Success indicators

- UI toast: `Request received successfully. Our team will call you back soon.`
- Email appears in Zoho mailbox.
- PHP terminal logs a success message with request id.

## If it fails

1. Check PHP terminal logs first.
2. Confirm the app password is valid and active in Zoho.
3. Confirm ports are free:
   - Vite: `5173`
   - PHP: `8000`
4. If toast shows a request id, use it to trace logs.

## Security note

- Do not hardcode SMTP passwords in source files.
- Keep credentials in environment variables only.
- Rotate app passwords if accidentally exposed.
