import mysql from 'mysql2/promise'; // Use the promise wrapper
import { config } from 'dotenv';

config();
const { ALL_DB_HOST, ALL_DB_USER, ALL_DB_PASSWORD, ALL_DB_NAME } = process.env;

const pool = mysql.createPool({
    host: ALL_DB_HOST,
    user: ALL_DB_USER,
    password: ALL_DB_PASSWORD,
    database: ALL_DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: {
        rejectUnauthorized: false
    }
});

// Test the connection
pool.getConnection()
    .then(connection => {
        console.log('Connected to database!');
        connection.release();
    })
    .catch(err => {
        console.error('Database connection failed: ', err);
    });

export default pool;

