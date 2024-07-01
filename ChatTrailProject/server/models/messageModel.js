import db from '../config/db.js';

// Create message
export async function createMessage(userId, message) {
    try {
        const result = await db.query('INSERT INTO messages (user_id, message) VALUES (?, ?)', [userId, message]);
        return result.insertId;
    } catch (err) {
        throw new Error('Failed to create message');
    }
}

// Get all messages
export async function getAllMessages() {
    try {
        const [rows] = await db.query('SELECT * FROM messages');
        return rows;
    } catch (err) {
        throw new Error('Failed to fetch messages');
    }
}
