// API Routes
import pool from "../../config/db.js";
import { generateNumericOTP } from "./generateOTP.js";
import { sendEmailOTP } from "./sendEmailOTP.js";

export const verifyOTP = async (req, res) => {
    const { type, otp } = req.body;
    if (!['mobile', 'email', 'call'].includes(type)) {
        return res.json({ isValid: false, message: 'Invalid type' });
    }
    try {
        const query = `
            SELECT * 
            FROM verification 
            WHERE type = ? AND otp = ? 
            ORDER BY created_at DESC 
            LIMIT 1
        `;
        const [rows] = await pool.query(query, [type, otp]);

        if (rows.length === 0) {
            return res.json({ isValid: false, message: 'Not Verified!' });
        }

        const otpRecord = rows[0];
        const currentTime = new Date();

        if (new Date(otpRecord.expires_at) < currentTime) {
            return res.json({ isValid: false, message: 'OTP Expired!' });
        }

        // Delete OTP from database
        const deleteQuery = 'DELETE FROM verification WHERE otpID = ?';
        await pool.query(deleteQuery, [otpRecord.otpID]);

        return res.json({ isValid: true, message: 'Verified!' });
    } catch (error) {
        console.error("Error verifying OTP:", error);
        return res.json({ isValid: false, message: 'Server Error' });
    }
};

export const generateOTP = async (req, res) => {
    const { type, purpose, userName, verificationID } = req.body;

    if (!['mobile', 'email', 'call'].includes(type)) {
        return res.status(400).json({ message: 'Invalid type' });
    }
    if (!['registration', 'passwordReset', 'verification'].includes(purpose)) {
        return res.status(400).json({ message: 'Invalid purpose' });
    }
    const otp = generateNumericOTP();

    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        const expiresInMinutes = 10;
        const expiresAt = new Date(Date.now() + expiresInMinutes * 60 * 1000);
        const query = 'INSERT INTO verification (type, otp, purpose, expires_at) VALUES (?, ?, ?, ?)';
        const [result] = await connection.query(query, [type, otp, purpose, expiresAt]);

        // Email sending
        const emailResult = await sendEmailOTP(userName, otp, purpose, type, verificationID);
        if (!emailResult.isEmailSent) {
            throw new Error('Failed to send email');
        }

        await connection.commit();
        res.status(201).json({ message: 'OTP generated successfully', ...emailResult });
    } catch (error) {
        await connection.rollback();
        res.status(500).json({ message: 'Error in OTP generation', error: error.message });
    } finally {
        connection.release();
    }
};
