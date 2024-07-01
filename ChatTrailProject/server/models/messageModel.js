const db = require('../config/db');

// Create message
exports.createMessage = async (userId, message) => {
    try {
        const result = await db.query('INSERT INTO messages (user_id, message) VALUES (?, ?)', [userId, message]);
        return result.insertId;
    } catch (err) {
        throw new Error('Failed to create message');
    }
};

// Get all messages
exports.getAllMessages = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM messages');
        return rows;
    } catch (err) {
        throw new Error('Failed to fetch messages');
    }
};
