// controllers/messageController.js

import db from '../../config/db.js';
import { getStatusDetails } from '../../utils/getStatusDetails.js';
import { handleText } from './handleText.js'
import { handleMedia } from './handleMedia.js';
import { handleMeeting } from './handleMeeting.js';
import { handlePayment } from './handlePayment.js';
import { handleCallUp } from './handleCallUp.js';
import { handleLocation } from './handleLocation.js';
import { handleFile } from './handleFile.js';
import { data } from '../../utils/apiCode.js';

const addMessage = async (req, res) => {
    const { chatId, userId, status, forwardedChat, msgType, messageData } = req.body;

    try {
        // Insert into message table
        const messageResult = await db.query(
            `INSERT INTO message (chatId, userId, status, forwardedChat, createdBy, updatedBy)
             VALUES (?, ?, ?, ?, ?, ?)`,
            [chatId, userId, status, forwardedChat, userId, userId]
        );

        const messageId = messageResult[0].insertId;

        // Insert into appropriate table based on msgType
        switch (msgType) {
            case 'text':
                await handleText(messageId, chatId, messageData)
                break;

            case 'media':
                await handleMedia(messageId, chatId, messageData)
                break;

            case 'meeting':
                await handleMeeting(messageId, chatId, messageData)
                break;

            case 'payment':
                await handlePayment(messageId, chatId, messageData)
                break;

            case 'call_up':
                await handleCallUp(messageId, chatId, messageData)
                break;

            case 'location':
                await handleLocation(messageId, chatId, messageData)
                break;

            case 'file':
                await handleFile(messageId, chatId, messageData)
                break;

            default:
                throw new Error('Invalid message type: it Should be text, media, ect');
        }

        const statusDetails = getStatusDetails(201);
        res.json({ ...statusDetails, responseCode: '0000A', message: 'Message added successfully' });
    } catch (err) {
        const statusDetails = getStatusDetails(500);
        res.status(Number(statusDetails.statusCode)).json({ ...statusDetails, message: 'Database error', responseCode: '0000B', err });
    }
};

export default addMessage;