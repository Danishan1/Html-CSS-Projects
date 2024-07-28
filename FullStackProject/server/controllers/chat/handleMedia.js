export const handleMedia = async (messageId, chatId, data) => {
    const { mediaName, mediaPath, mediaSize, mediaType, duration, bitrate } = data;

    await db.query(
        `INSERT INTO media (messageId, chatId, mediaName, mediaPath, mediaSize, mediaType, duration, bitrate)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [messageId, chatId, mediaName, mediaPath, mediaSize, mediaType, duration, bitrate]
    );
}
