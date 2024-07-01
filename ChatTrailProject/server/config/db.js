const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test the connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed: ', err);
    } else {
        console.log('Connected to database!');
        connection.release();
    }
});

module.exports = pool.promise();
