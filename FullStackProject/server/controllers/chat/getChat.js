import db from '../../config/db.js';
import { getChatQuery } from '../../queries/getChatQuery.js';
import { getStatusDetails } from '../../utils/getStatusDetails.js';

export const getChats = async (req, res) => {
    let { chatId } = req.params;
    chatId = Number(chatId);

    const authenticatedUserID = req.session.userId;
    const sql = getChatQuery();
    try {
        const [results] = await db.query(sql, [chatId, chatId, chatId, chatId, chatId, chatId, chatId]);

        const statusDetails = getStatusDetails(200);
        res.json({ ...statusDetails, responseCode: '0000C', results });
    } catch (err) {
        const statusDetails = getStatusDetails(500);
        res.status(Number(statusDetails.statusCode)).json({ ...statusDetails, message: 'Database error', responseCode: '0000B', err });
    }

}