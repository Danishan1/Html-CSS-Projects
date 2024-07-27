import db from '../../config/db.js';
import { getStatusDetails } from '../../utils/getStatusDetails.js';

export const getChats = async (req, res) => {
    const { userId } = req.params;

    const authenticatedUserID = req.session.userId;
    const sql = `
        SELECT DISTINCT c.chatId
        FROM Chat c
        JOIN chat_participant cp1 ON c.chatId = cp1.chatId
        JOIN chat_participant cp2 ON c.chatId = cp2.chatId
        WHERE cp1.userId = ?
        AND cp2.userId = ?;
    `;
    try {
        const [results] = await db.query(sql, [userId, authenticatedUserID]);
        const statusDetails = getStatusDetails(200);
        res.json({ ...statusDetails, responseCode: '0000C', results });
    } catch (err) {
        const statusDetails = getStatusDetails(500);
        res.status(Number(statusDetails.statusCode)).json({ ...statusDetails, message: 'Database error', responseCode: '0000B', err });
    }

}