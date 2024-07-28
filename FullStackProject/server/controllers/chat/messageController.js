// controllers/messageController.js

import db from '../../config/db.js';
import { getStatusDetails } from '../../utils/getStatusDetails.js';

// Helper function to add a message
const addMessage1 = async (messageQuery, params, res) => {
    try {
        await db.query(messageQuery, params);
        const statusDetails = getStatusDetails(200);
        res.json({ ...statusDetails, responseCode: '0000C', message: 'Message added successfully' });
    } catch (err) {
        const statusDetails = getStatusDetails(500);
        res.status(Number(statusDetails.statusCode)).json({ ...statusDetails, message: 'Database error', responseCode: '0000B', err });
    }
};

const insertMessage = async (chatId, userId, status, forwardedChat, createdBy, updatedBy) => {
    const sql = `
        INSERT INTO message (chatId, userId, status, forwardedChat, createdBy, updatedBy)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    const [result] = await db.query(sql, [chatId, userId, status, forwardedChat, createdBy, updatedBy]);
    return result.insertId;
};

export const addTextMessage = async (req, res) => {
    const { chatId, userId, status, forwardedChat, createdBy, updatedBy, textContent } = req.body;

    try {
        // Insert the message and get its ID
        const messageId = await insertMessage(chatId, userId, status, forwardedChat, createdBy, updatedBy);

        // Insert the text message
        const sql = `
            INSERT INTO text (messageId, textContent)
            VALUES (?, ?)
        `;
        await db.query(sql, [messageId, textContent]);

        const statusDetails = getStatusDetails(200);
        res.json({ ...statusDetails, responseCode: '0000C', message: 'Text message added successfully' });
    } catch (err) {
        const statusDetails = getStatusDetails(500);
        res.status(Number(statusDetails.statusCode)).json({ ...statusDetails, message: 'Database error', responseCode: '0000B', err });
    }
};

// Add Media Message
export const addMediaMessage = async (req, res) => {
    const { messageId, chatId, userId, mediaName, mediaPath, mediaSize, mediaType } = req.body;
    const messageQuery = `
    INSERT INTO Media (messageId, chatId, userId, mediaName, mediaPath, mediaSize, mediaType)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
    await addMessage(messageQuery, [messageId, chatId, userId, mediaName, mediaPath, mediaSize, mediaType], res);
};

// Add Meeting Message
export const addMeetingMessage = async (req, res) => {
    const { messageId, chatId, userId, title, purpose, description, date, time, duration, location, videoCallLink } = req.body;
    const messageQuery = `
    INSERT INTO Meeting (messageId, chatId, userId, title, purpose, description, date, time, duration, location, videoCallLink)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
    await addMessage(messageQuery, [messageId, chatId, userId, title, purpose, description, date, time, duration, location, videoCallLink], res);
};

// Add Payment Message
export const addPaymentMessage = async (req, res) => {
    const { messageId, chatId, userId, amount, dueDate, refNo, bankName, payFrom, payTo, payStatus } = req.body;
    const messageQuery = `
    INSERT INTO Payment (messageId, chatId, userId, amount, dueDate, refNo, bankName, payFrom, payTo, payStatus)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
    await addMessage(messageQuery, [messageId, chatId, userId, amount, dueDate, refNo, bankName, payFrom, payTo, payStatus], res);
};

// Add Call Up Message
export const addCallUpMessage = async (req, res) => {
    const { messageId, chatId, userId, type, duration, callStatus } = req.body;
    const messageQuery = `
    INSERT INTO CallUp (messageId, chatId, userId, type, duration, callStatus)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
    await addMessage(messageQuery, [messageId, chatId, userId, type, duration, callStatus], res);
};

// Add Location Message
export const addLocationMessage = async (req, res) => {
    const { messageId, chatId, userId, address } = req.body;
    const messageQuery = `
    INSERT INTO Location (messageId, chatId, userId, address)
    VALUES (?, ?, ?, ?)
  `;
    await addMessage(messageQuery, [messageId, chatId, userId, address], res);
};

// Add File Message
export const addFileMessage = async (req, res) => {
    const { messageId, chatId, userId, fileName, filePath, fileSize, fileType } = req.body;
    const messageQuery = `
    INSERT INTO File (messageId, chatId, userId, fileName, filePath, fileSize, fileType)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
    await addMessage(messageQuery, [messageId, chatId, userId, fileName, filePath, fileSize, fileType], res);
};


// #########################################################################################################



export const addMessage = async (req, res) => {
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
                await db.query(
                    `INSERT INTO text (messageId, chatId, text) VALUES (?, ?, ?)`,
                    [messageId, chatId, messageData.text]
                );
                break;

            case 'media':
                const { mediaName, mediaPath, mediaSize, mediaType, duration, bitrate } = messageData;

                await db.query(
                    `INSERT INTO media (messageId, chatId, mediaName, mediaPath, mediaSize, mediaType, duration, bitrate)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                    [messageId, chatId, mediaName, mediaPath, mediaSize, mediaType, duration, bitrate]
                );
                break;

            case 'meeting':
                await db.query(
                    `INSERT INTO meeting (messageId, title, purpose, description, date, time, duration, location, videoCallLink)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [messageId, messageData.title, messageData.purpose, messageData.description, messageData.date, messageData.time, messageData.duration, messageData.location, messageData.videoCallLink]
                );
                break;

            case 'payment':
                await db.query(
                    `INSERT INTO payment (messageId, payFrom, payTo, amount, dueDate, payStatus, refNo, bankName)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                    [messageId, messageData.payFrom, messageData.payTo, messageData.amount, messageData.dueDate, messageData.payStatus, messageData.refNo, messageData.bankName]
                );
                break;

            case 'call_up':
                await db.query(
                    `INSERT INTO call_up (messageId, type, duration, callStatus)
                     VALUES (?, ?, ?, ?)`,
                    [messageId, messageData.type, messageData.duration, messageData.callStatus]
                );
                break;

            case 'location':
                await db.query(
                    `INSERT INTO location (messageId, latitude, longitude, address)
                     VALUES (?, ?, ?, ?)`,
                    [messageId, messageData.latitude, messageData.longitude, messageData.address]
                );
                break;

            case 'file':
                await db.query(
                    `INSERT INTO file (messageId, fileName, filePath, fileSize, fileType)
                     VALUES (?, ?, ?, ?, ?)`,
                    [messageId, messageData.fileName, messageData.filePath, messageData.fileSize, messageData.fileType]
                );
                break;

            default:
                throw new Error('Invalid message type');
        }

        const statusDetails = getStatusDetails(201);
        res.json({ ...statusDetails, responseCode: '0000A', message: 'Message added successfully' });
    } catch (err) {
        const statusDetails = getStatusDetails(500);
        res.status(Number(statusDetails.statusCode)).json({ ...statusDetails, message: 'Database error', responseCode: '0000B', err });
    }
};
