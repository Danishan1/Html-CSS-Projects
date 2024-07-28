export const handleFile = async (messageId, chatId, data) => {
    const { fileName, filePath, fileSize, fileType } = data;

    await db.query(
        `INSERT INTO file (messageId, userId,  fileName, filePath, fileSize, fileType)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [messageId, chatId, fileName, filePath, fileSize, fileType]
    );
}