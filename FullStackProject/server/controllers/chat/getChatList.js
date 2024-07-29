import pool from "../../config/db.js";

export const getChatList = async (req, res) => {
    const userId = req.session.userID;

    if (!userId) {
        return res.status(400).json({ error: "User not authenticated" });
    }

    let conn;

    try {
        conn = await pool.getConnection();
        conn.beginTransaction()

        // Query-1: Selecting all the chatIds based on userId
        const chatListQuery = `SELECT chatId FROM chat_list WHERE userId = ?;`;
        const [chatListResults] = await conn.query(chatListQuery, [userId]);
        const chatIds = chatListResults.map(result => result.chatId);

        if (chatIds.length === 0) {
            return res.status(200).json({ data: [] });
        }

        // Query-2: Finding the details of last message of each chat
        const chatDetailsQuery = `
            SELECT c.chatId, c.chatName, m.messageId, m.createdAt as lastMsgTime, mm.type
            FROM chat c
            LEFT JOIN (
                SELECT chatId, messageId, createdAt
                FROM message
                WHERE (chatId, messageId) IN (
                    SELECT chatId, MAX(messageId)
                    FROM message
                    GROUP BY chatId
                )
            ) m ON c.chatId = m.chatId
            LEFT JOIN message_meta mm ON m.messageId = mm.messageId
            WHERE c.chatId IN (?);
        `;

        const [chatDetailsResults] = await conn.query(chatDetailsQuery, [chatIds]);

        // Fetching actual message text if type is 'text'
        for (let chat of chatDetailsResults) {
            if (chat.type === 'text') {
                const textQuery = `SELECT text FROM text WHERE messageId = ?`;
                const [textResults] = await conn.query(textQuery, [chat.messageId]);
                if (textResults.length > 0) {
                    chat.message = textResults[0].text;
                } else {
                    chat.message = '';
                }
            } else {
                chat.message = chat.type;
            }
        }

        conn.commit();
        res.status(200).json({ data: chatDetailsResults });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    } finally {
        if (conn) conn.release();
    }
};
