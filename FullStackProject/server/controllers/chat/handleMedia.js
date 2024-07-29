export const handleMedia = async (messageId, chatId, data, conn, res) => {
    try {
        
        const { mediaName, mediaPath, mediaSize, mediaType, duration, bitrate } = data;
        await conn.query(
            `INSERT INTO media (messageId, chatId, mediaName, mediaPath, mediaSize, mediaType, duration, bitrate)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [messageId, chatId, mediaName, mediaPath, mediaSize, mediaType, duration, bitrate]
        );
    } catch (err) {
        res.status(500).json({ responseCode: "0001D", message: "Error While entring media into database", err })

    }
}
