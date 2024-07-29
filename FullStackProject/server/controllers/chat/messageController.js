// controllers/messageController.js

import pool from '../../config/db.js';
import { getStatusDetails } from '../../utils/getStatusDetails.js';
import { handleText } from './handleText.js'
import { handleMedia } from './handleMedia.js';
import { handleMeeting } from './handleMeeting.js';
import { handlePayment } from './handlePayment.js';
import { handleCallUp } from './handleCallUp.js';
import { handleLocation } from './handleLocation.js';
import { handleFile } from './handleFile.js';

const addMessage = async (req, res) => {
    const { chatId, userId, status, forwardedChat, msgType, messageData } = req.body;

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

        // Insert into appropriate table based on msgType
        switch (msgType) {
            case 'text':
                await handleText(messageId, chatId, messageData, conn, res)
                break;

            case 'media':
                await handleMedia(messageId, chatId, messageData, conn, res)
                break;

            case 'meeting':
                await handleMeeting(messageId, chatId, messageData, conn, res)
                break;

            case 'payment':
                await handlePayment(messageId, chatId, messageData, conn, res)
                break;

            case 'call_up':
                await handleCallUp(messageId, chatId, messageData, conn, res)
                break;

            case 'location':
                await handleLocation(messageId, chatId, messageData, conn, res)
                break;

            case 'file':
                await handleFile(messageId, chatId, messageData, conn, res)
                break;

            default:
                throw new Error('Invalid message type: it Should be text, media, ect');
        }

        const statusDetails = getStatusDetails(201);
        if (conn) conn.commit();
        res.status(201).json({ ...statusDetails, responseCode: '0000D', message: 'Message added successfully' });
    } catch (err) {

        if (conn) conn.rollback();
        const statusDetails = getStatusDetails(500);
        res.status(Number(statusDetails.statusCode)).json({ ...statusDetails, message: 'Database error', responseCode: '0000E', err });
    } finally {
        if (conn) conn.release()
    }
};

export default addMessage;

