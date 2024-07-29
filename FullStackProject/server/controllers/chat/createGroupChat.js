import pool from "../../config/db.js";

export const createGroupChat = async (req, res) => {
    const userId = req.session.userID;
    const { participantsID, groupName, groupDescription, members } = req.body;

    if (!userId || !participantsID || !groupName || !groupDescription || !members) {
        return res.status(400).json({ responseId: '00011', error: "Missing required fields" });
    }

    const isGroupChat = true;
    const createdBy = userId;

    let query;
    let connection;

    try {
        connection = await pool.getConnection();
        await connection.beginTransaction();

        query = `INSERT INTO chat (members, admin, chatName, chatDescription, isGroupChat, createdBy, updatedBy)
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;

        const [chatResults] = await connection.query(query, [members, userId, groupName, groupDescription, isGroupChat, createdBy, createdBy]);
        const chatId = chatResults.insertId;

        query = `INSERT INTO chat_list (userId, chatId) VALUES (?, ?)`;

        await connection.query(query, [userId, chatId]);

        // Add participants to the chat_list
        for (const participantId of participantsID) {
            await connection.query(query, [participantId, chatId]);
        }

        await connection.commit();
        res.status(201).json({ chatId, responseId: '0000F' });
    } catch (error) {
        if (connection) await connection.rollback();
        return res.status(500).json({ responseId: '00010', error: error.message });
    } finally {
        if (connection) connection.release();
    }
};
