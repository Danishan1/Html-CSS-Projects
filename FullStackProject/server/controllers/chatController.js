import db from '../config/db.js';

export const getChats = async (req, res) => {
    const userId = req.session.userId;
    const sql = 'SELECT * FROM chat WHERE userId = ?';
    try {
        const [results] = await db.query(sql, [userId]);
        res.json(results);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

export const createChat = async (req, res) => {
    const userId = req.session.userId;
    const { message, receiverId } = req.body;
    const sql = 'INSERT INTO messages (sender_id, receiver_id, message) VALUES (?, ?, ?)';
    try {
        await db.query(sql, [userId, receiverId, message]);
        res.status(201).send('Message sent');
    } catch (err) {
        res.status(500).send('Server error');
    }
};
