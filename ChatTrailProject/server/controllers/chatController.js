const db = require('../config/db');

// Create a new message
exports.createMessage = async (req, res) => {
    const { userId, message } = req.body;
    try {
        const result = await db.query('INSERT INTO messages (user_id, message) VALUES (?, ?)', [userId, message]);
        res.status(201).json({ message: 'Message created successfully', messageId: result.insertId });
    } catch (err) {
        console.error('Error creating message:', err);
        res.status(500).json({ error: 'Failed to create message' });
    }
};

// Get all messages
exports.getAllMessages = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM messages');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching messages:', err);
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
};
