
import pool from '../../config/db.js';
import { getStatusDetails } from '../../utils/getStatusDetails.js';
import { handleText } from '../../controllers/chat/handleText.js'
import { handleMedia } from '../../controllers/chat/handleMedia.js';
import { handleMeeting } from '../../controllers/chat/handleMeeting.js';
import { handlePayment } from '../../controllers/chat/handlePayment.js';
import { handleCallUp } from '../../controllers/chat/handleCallUp.js';
import { handleLocation } from '../../controllers/chat/handleLocation.js';
import { handleFile } from '../../controllers/chat/handleFile.js';
import { getMessage } from './getMessage.js';
import { updateChatList } from './updateChatList.js';

export const messageSocket = async (io, socket, data) => {

    const { chatId, forwardedChat, msgType, messageData } = data;
    const userId = socket.request.session.userId;
    const status = 'sent';

    let conn;
    try {
        conn = await pool.getConnection();
        await conn.beginTransaction();

        // Insert into message table
        const [messageResult] = await conn.query(
            `INSERT INTO message (chatId, userId, status, forwardedChat, createdBy, updatedBy)
             VALUES (?, ?, ?, ?, ?, ?)`,
            [chatId, userId, status, forwardedChat, userId, userId]
        );

        const messageId = messageResult.insertId;
        await conn.query(
            `INSERT INTO message_meta (messageId, type, priority)
             VALUES (?, ?, ?)`,
            [messageId, msgType, 'normal']
        );


        // Insert into appropriate table based on msgType
        switch (msgType) {
            case 'text':
                await handleText(messageId, chatId, messageData, conn);
                break;
            case 'media':
                await handleMedia(messageId, chatId, messageData, conn);
                break;
            case 'meeting':
                await handleMeeting(messageId, chatId, messageData, conn);
                break;
            case 'payment':
                await handlePayment(messageId, chatId, messageData, conn);
                break;
            case 'call_up':
                await handleCallUp(messageId, chatId, messageData, conn);
                break;
            case 'location':
                await handleLocation(messageId, chatId, messageData, conn);
                break;
            case 'file':
                await handleFile(messageId, chatId, messageData, conn);
                break;
            default:
                throw new Error('Invalid message type: it Should be text, media, ect');
        }

        const statusDetails = getStatusDetails(201);
        if (conn) conn.commit();
        if (conn) conn.release();

        // Notify all users in the chat room
        const newMessage = await getMessage({ chatId, messageId, userId, msgType });
        const lastMsgData = updateChatList(newMessage);

        // Emit the message to the sender with isSender set to true
        newMessage.chat.result[0].isSender = true;
        socket.emit('newMessage', newMessage);

        // Emit the message to others in the chat room with isSender set to false
        newMessage.chat.result[0].isSender = false;
        socket.broadcast.to(chatId).emit('newMessage', newMessage);

        // Update chat List
        io.to(chatId).emit('updateChatList', lastMsgData);

        socket.emit('sendMessage', { ...statusDetails, responseCode: '00027', message: 'Message added successfully' });

    } catch (err) {
        if (conn) conn.rollback();
        const statusDetails = getStatusDetails(500);
        const response = { ...statusDetails, responseCode: err.responseCode || '00028', error: err.message || 'Database error while inserting into Message Table', err };
        socket.emit('sendMessage', response);
    } finally {
        if (conn) conn.release()
    }
};