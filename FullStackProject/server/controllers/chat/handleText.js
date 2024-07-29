export const handleText = async (messageId, chatId, data, conn, res) => {
    try{
        await db.query(
            `INSERT INTO text (messageId, chatId, text) VALUES (?, ?, ?)`,
            [messageId, chatId, data.text]
        );
    }catch (err) {
        // res.sta
        
    }
}
