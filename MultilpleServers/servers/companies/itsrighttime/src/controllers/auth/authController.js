import pool from '../../config/db.js'; // Adjust based on your database setup
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv'

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid username' });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Create session and set token
        req.session.authToken = jwt.sign({ userId: user.id }, process.env.ALL_JWT_SECRET, { expiresIn: '1d' });
        res.json({ message: 'Login successful', user });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const logoutUser = (req, res) => {
    try {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).json({ message: 'Failed to log out' });
            }
            res.json({ message: 'Logout successful' });
        });
    } catch (error) {
        console.error("Logout error:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user already exists
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
        if (rows.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user into the database
        await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
