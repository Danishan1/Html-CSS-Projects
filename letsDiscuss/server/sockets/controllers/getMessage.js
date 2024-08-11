import db from '../../config/db.js';
import { getStatusDetails } from '../../utils/getStatusDetails.js';
import { addSenderAttribute } from '../../controllers/chat/helper/addSenderAttribute.js';
import { getChatDetails } from '../../controllers/chat/helper/getChatDetails.js';
import { splitMessageContent } from '../../controllers/chat/helper/splitMessageContent.js';


export const getMessage = async (data) => {

    const { userId, chatId, messageId, msgType } = data;
    let getQuery;

    try {
        // Dynamic import based on msgType
        switch (msgType) {
            case 'text':
                getQuery = (await import('../../queries/getTextMsgQuery.js')).getTextMsgQuery;
                break;
            case 'media':
                getQuery = (await import('../../queries/getMediaMsgQuery.js')).getMediaMsgQuery;
                break;
            case 'meeting':
                getQuery = (await import('../../queries/getMeetingMsgQuery.js')).getMeetingMsgQuery;
                break;
            case 'payment':
                getQuery = (await import('../../queries/getPaymentMsgQuery.js')).getPaymentMsgQuery;
                break;
            case 'call_up':
                getQuery = (await import('../../queries/getCallupMsgQuery.js')).getCallupMsgQuery;
                break;
            case 'location':
                getQuery = (await import('../../queries/getLocationMsgQuery.js')).getLocationMsgQuery;
                break;
            case 'file':
                getQuery = (await import('../../queries/getFileMsgQuery.js')).getFileMsgQuery;
                break;
            default:
                throw new Error('Invalid message type: it should be text, media, etc.');
        }

        let sql = `
            WITH last_message AS (
                ${getQuery()} AND messageId = ?
            )
            SELECT
                m.messageType,
                m.messageContent,
                message.*,
                user.name
            FROM
                last_message m
                JOIN message ON m.messageId = message.messageId
                JOIN user ON message.userId = user.userId;
        `;

        const [results] = await db.query(sql, [chatId, messageId]);

        let processedResults = results;

        processedResults = addSenderAttribute(processedResults, userId);
        processedResults = splitMessageContent(processedResults);

        const chatDetails = await getChatDetails(chatId, db)

        return ({ responseCode: '00025', chat: { chatDetails, result: processedResults } });
    } catch (err) {
        const statusDetails = getStatusDetails(500);
        return ({ ...statusDetails, message: 'Database error', responseCode: '00026', err });
    }
}
