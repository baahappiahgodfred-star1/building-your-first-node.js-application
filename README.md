# Node.js Modules Exercises

This project demonstrates using built-in, local, and third-party modules in Node.js.

Files:
- `message.txt` - sample text used by `readFile.js`.
- `readFile.js` - reads `message.txt` using Node's built-in `fs` module.
- `reportGenerator.js` - local module that generates a student report and writes a file.
- `main.js` - example usage of `reportGenerator.js`.
- `emailSender.js` - sends an email using `nodemailer`. Supports real SMTP credentials or a test Ethereal account.
- `package.json` - project manifest.

Setup

1. Install dependencies:

```bash
npm install
```

2. (Optional) Create a `.env` file for real SMTP credentials. See `.env.example` for keys. If you don't provide credentials, `emailSender.js` will use an Ethereal test account (no real email sent).

.env example keys:
- `SMTP_USER` - SMTP username (for Gmail use your email address)
- `SMTP_PASS` - SMTP password or app password
- `SMTP_HOST` - SMTP host (defaults to `smtp.gmail.com`)
- `SMTP_PORT` - SMTP port (defaults to `465`)
- `SMTP_SECURE` - `true` or `false` (defaults to `true`)
- `SMTP_TO` - recipient email
- `SMTP_FROM` - sender email

Run

Read file:

```bash
node readFile.js
```

Generate report:

```bash
node main.js
```

Send email (uses `.env` if present, otherwise uses Ethereal test account):

```bash
node emailSender.js
```

Notes

- Keep your real SMTP credentials out of source control. Use environment variables or a secure secret manager.
- For Gmail, you may need to create an App Password: https://support.google.com/accounts/answer/185833
