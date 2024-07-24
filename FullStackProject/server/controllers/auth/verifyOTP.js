// API Routes
import pool from "../../config/db.js";

export const verifyOTP = async (req, res) => {
    const { type, otp, verifi_ID } = req.body;
    if (!['mobile', 'email', 'call'].includes(type)) {
        return res.json({ isValid: false, message: 'Invalid type' });
    }
    try {
        const query = `
            SELECT * 
            FROM verification 
            WHERE type = ? AND verifi_ID = ? AND otp = ? 
            ORDER BY created_at DESC 
            LIMIT 1
        `;
        const [rows] = await pool.query(query, [type, verifi_ID, otp]);

        if (rows.length === 0) {
            return res.json({ isValid: false, message: 'Not Verified!' });
        }

        const otpRecord = rows[0];
        const currentTime = new Date();

        if (new Date(otpRecord.expires_at) < currentTime) {
            return res.json({ isValid: false, message: 'OTP Expired!' });
        }

        // Delete OTP from database
        const deleteQuery = 'DELETE FROM verification WHERE verifi_ID = ? AND otp = ?';
        await pool.query(deleteQuery, [verifi_ID, otp]);

        return res.json({ isValid: true, message: 'Verified!' });
    } catch (error) {
        console.error("Error verifying OTP:", error);
        return res.json({ isValid: false, message: 'Server Error' });
    }
};
