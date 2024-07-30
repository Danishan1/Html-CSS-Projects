import pool from "../../config/db.js";

export const createChat = async (req, res) => {
    const userId = req.session.userId;
    const participantId = req.body.participantId;

    if (!userId || !participantId) {
        return res.status(400).json({ responseCode: '00012', error: "Missing required fields" });
    }

    const members = 2; // Since it's a one-on-one chat
    const isGroupChat = false;
    const createdBy = userId;

    let query;
    let connection;

    try {
        connection = await pool.getConnection();
        await connection.beginTransaction();

        query = `SELECT userId, name FROM user WHERE userId = ?`
        const [checkParticipant] = await connection.query(query, [participantId]);

        if (checkParticipant.length === 0) return res.status(404).json({ responseId: '00018', message: `User with : ${participantId} not exist` });
        const chatName = checkParticipant[0].name;
        const description = "This is private chat but still leagally bounded."

        query = `INSERT INTO chat (members, admin, chatName, chatDescription, isGroupChat, createdBy, updatedBy)
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;

        const [results] = await connection.query(query, [members, userId, chatName, description, isGroupChat, createdBy, createdBy]);
        const chatId = results.insertId;

        query = `INSERT INTO chat_list (userId, chatId) VALUES (?, ?)`;

        // Add the current user to chat_list
        await connection.query(query, [userId, chatId]);

        // Add the participant to chat_list
        await connection.query(query, [participantId, chatId]);

        await connection.commit();
        res.status(201).json({ chatId, responseId: '00013' });
    } catch (error) {
        if (connection) await connection.rollback();
        return res.status(500).json({ responseId: '00014', error: error.message });
    } finally {
        if (connection) connection.release();
    }
};
