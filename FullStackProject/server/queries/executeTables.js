import fs from 'fs';
import path from 'path';
import pool from '../database/pool.js';
import tableDirName from '../tableCreation/getFolderPath.js';

// Function to create the users table
export const executeTables = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to the database.');

        const sqlFiles = fs.readdirSync(tableDirName);

        for (const sqlFile of sqlFiles) {
            if (path.extname(sqlFile) === ".sql") {
                const filePath = path.join(tableDirName, sqlFile)
                const sql = fs.readFileSync(filePath, "utf-8")
                await connection.query(sql);
                console.log(`Excecuted ${sqlFile}`)
            }
        }

    } catch (err) {
        console.error('Error executing SQL files:', err);
    } finally {
        pool.end();
        console.log('Disconnected from the database.');
    }
};

executeTables()
