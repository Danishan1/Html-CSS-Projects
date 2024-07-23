import pool from "../../config/db.js";
import { generateNumericOTP } from "./generateOTP.js";
import { sendEmailOTP } from "./sendEmailOTP.js";


export const getOTP = async (req, res) => {
    const { type, purpose, userName, verificationID } = req.body;

    if (!['mobile', 'email', 'call'].includes(type)) {
        return res.status(400).json({ message: 'Invalid type' });
    }
    if (!['registration', 'passwordReset', 'verification'].includes(purpose)) {
        return res.status(400).json({ message: 'Invalid purpose' });
    }

    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        // Check if the verificationID exists
        let checkQuery = '';
        let checkParam = [];

        if (type === 'email') {
            checkQuery = 'SELECT email FROM user WHERE email = ?';
            checkParam = [verificationID];
        } else if (type === 'mobile') {
            checkQuery = 'SELECT mobile FROM user WHERE mobile = ?';
            checkParam = [verificationID];
        }

        const [checkResult] = await connection.query(checkQuery, checkParam);

        if (checkResult.length > 0) {
            const field = type === 'email' ? 'email' : 'mobile';
            return res.json({ code: "INFO01", message: `${field.charAt(0).toUpperCase() + field.slice(1)} is already registered!` });
        }

        // Generate OTP
        const otp = generateNumericOTP();
        const expiresInMinutes = 10;
        const expiresAt = new Date(Date.now() + expiresInMinutes * 60 * 1000);
        const query = 'INSERT INTO verification (type, otp, purpose, expires_at) VALUES (?, ?, ?, ?)';
        await connection.query(query, [type, otp, purpose, expiresAt]);

        // Send OTP
        let sendResult;
        if (type === 'email') {
            sendResult = await sendEmailOTP(userName, otp, purpose, type, verificationID);
        } else if (type === 'mobile') {
            sendResult = await sendEmailOTP(userName, otp, purpose, type, verificationID);
            // sendResult = await sendSMSOTP(verificationID, otp);  // Assuming sendSMSOTP is implemented similarly
        }

        if (!sendResult.isSent) {
            throw new Error('Failed to send OTP');
        }

        await connection.commit();
        if (!isValid) return;
        res.status(201).json({ code: 'SUCC', message: 'OTP generated successfully', ...sendResult });
    } catch (error) {
        await connection.rollback();
        res.status(500).json({ code: 'ERR01', message: 'Error in OTP generation', error: error.message });
    } finally {
        connection.release();
    }
};
