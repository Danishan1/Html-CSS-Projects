import express from 'express';
import pool from '../config/db.js';

const router = express.Router();

router.get('/testDB', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT 1 AS solution');
        res.status(200).json({ message: 'Database connection successful', solution: rows[0].solution });
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed', error: error.message });
    }
});

export default router;
