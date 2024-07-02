import bcrypt from 'bcryptjs';
import db from '../config/db.js';

export const register = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    try {
        db.query(sql, [username, hashedPassword]);
        res.status(201).send('User registered');
    } catch (err) {
        res.status(500).send('Server error');
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ?';
    try {
        const [results] = db.query(sql, [username]);
        if (results.length === 0) return res.status(400).send('User not found');
        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');
        req.session.userId = user.id;
        res.send('Logged in');
    } catch (err) {
        res.status(500).send('Server error');
    }
};

export const logout = (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).send('Server error');
        res.send('Logged out');
    });
};

export const profile = (req, res) => {
    if (!req.session.userId) return res.status(401).send('Unauthorized');
    res.send(`User ID: ${req.session.userId}`);
};
