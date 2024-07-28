import db from '../../config/db.js';
import { getChatQuery } from '../../queries/getChatQuery.js';
import { getStatusDetails } from '../../utils/getStatusDetails.js';
import { splitMessageContent } from './helper/splitMessageContent.js';

const monthYearToTimestamp = (monthYear) => {
    const [month, year] = monthYear.split(', ');
    const date = new Date(`${month} 1, ${year}`);
    return date.getTime();
};

export const getChats = async (req, res) => {
    let { chatId } = req.params;
    const { startCount = 0, endCount = 50, limiter = 'number' } = req.body; // limiter: time, number,  
    chatId = Number(chatId);
    const authenticatedUserID = req.session.userId;
    const sql = getChatQuery();
    let isEnd = false;

    try {
        const [results] = await db.query(sql, [chatId, chatId, chatId, chatId, chatId, chatId, chatId]);
        // result is Array of Dictornary : 
        // {messageType, messageContent, messageId, chatId, userId, status, forwardedChat, createdBy, updatedBy, createdAt, updatedAt}

        const msgLength = results.length;

        let processedResults = results;

        if (limiter === 'time') {
            const startTimestamp = monthYearToTimestamp(startCount);
            const endTimestamp = monthYearToTimestamp(endCount) + (30 * 24 * 60 * 60 * 1000) - 1; // Add 30 days to end timestamp

            if (results.length === 0) {
                processedResults = [];
                isEnd = true;
            } else {
                processedResults = results.filter(message => {
                    const messageTimestamp = new Date(message.createdAt).getTime();
                    return messageTimestamp >= startTimestamp && messageTimestamp <= endTimestamp;
                });
                isEnd = processedResults.length === 0;
            }
        } else {
            // number
            if (msgLength > startCount) {
                if (msgLength <= endCount) {
                    processedResults = results.slice(startCount);
                    isEnd = true;
                } else {
                    processedResults = results.slice(startCount, endCount + 1);
                    isEnd = false;
                }
            } else {
                processedResults = [];
                isEnd = true;
            }
        }

        processedResults = splitMessageContent(processedResults);

        const statusDetails = getStatusDetails(200);
        res.json({ ...statusDetails, responseCode: '0000C', result: { isEnd, processedResults } });
    } catch (err) {
        const statusDetails = getStatusDetails(500);
        res.status(Number(statusDetails.statusCode)).json({ ...statusDetails, message: 'Database error', responseCode: '0000B', err });
    }
}
