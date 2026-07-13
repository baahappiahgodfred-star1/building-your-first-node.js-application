const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

async function sendEmail() {
    // If SMTP credentials are provided via .env, use them (e.g., Gmail app password).
    // Otherwise create a test account (Ethereal) so the script still works for testing.
    let transporter;

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT) || 465,
            secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
    } else {
        // Create an ethereal test account when no credentials are provided
        const testAccount = await nodemailer.createTestAccount();
        transporter = nodemailer.createTransport({
            host: testAccount.smtp.host,
            port: testAccount.smtp.port,
            secure: testAccount.smtp.secure,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });
    }

    const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@example.com',
        to: process.env.SMTP_TO || 'sylvestre@groupeisi.com',
        subject: process.env.SMTP_SUBJECT || 'Hello from Node.js',
        text: process.env.SMTP_TEXT || 'Hello world?',
        html: process.env.SMTP_HTML || '<b>Hello world?</b>',
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent:', info.messageId);
        const preview = nodemailer.getTestMessageUrl(info);
        if (preview) console.log('Preview URL:', preview);
    } catch (err) {
        console.error('Error while sending mail:', err);
        process.exitCode = 1;
    }
}

sendEmail();