export const handleFile = async (messageId, chatId, data, conn, res) => {
    
    try {
        const { fileName, filePath, fileSize, fileType } = data;
        await conn.query(
            `INSERT INTO file (messageId, userId,  fileName, filePath, fileSize, fileType)
         VALUES (?, ?, ?, ?, ?, ?)`,
            [messageId, chatId, fileName, filePath, fileSize, fileType]
        );
    } catch (err) {
        res.status(500).json({ responseCode: "0001F", message: "Error While entring file into database", err })

    }
}