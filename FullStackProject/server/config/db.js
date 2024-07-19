import { createPool } from 'mysql2';
import { config } from 'dotenv';

config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;


const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    // authPlugins: {
    //     caching_sha2_password: () => require('mysql2/lib/auth_plugins').auth
    // }
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

export default pool;

// import mysql from 'mysql2/promise';

// const dbConfig = {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     // authPlugins: {
//     //     mysql_native_password: () => require('mysql2/lib/auth_plugins').auth
//     // }
// };

// // const dbConfig = {
// //     host: "localhost",
// //     user: "danishan",
// //     password: "danishan",
// //     database: "fullstack_project",
// //     // authPlugins: {
// //     //     mysql_native_password: () => require('mysql2/lib/auth_plugins').auth
// //     // }
// // };

// const connectDB = async () => {
//     try {
//         const connection = await mysql.createConnection(dbConfig);
//         console.log('MySQL connected');
//         return connection;
//     } catch (error) {
//         console.error('MySQL connection error:', error);
//         process.exit(1);
//     }
// };

// const testConnection = async () => {
//     try {
//         const connection = await connectDB();
//         if (connection) {
//             console.log('Database connection successful');
//             // Close the connection after testing
//             await connection.end();
//         }
//     } catch (error) {
//         console.error('Error testing the database connection:', error);
//     }
// };

// testConnection();



// export default connectDB;

