export const handleText = async (messageId, chatId, data) => {
    await db.query(
        `INSERT INTO text (messageId, chatId, text) VALUES (?, ?, ?)`,
        [messageId, chatId, data.text]
    );
}
