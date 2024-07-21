import nodemailer from 'nodemailer';

// Utility function to send emails
const sendEmail = async (email, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: text
    };

    await transporter.sendMail(mailOptions);
};