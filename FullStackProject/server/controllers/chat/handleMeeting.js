export const handleMeeting = async (messageId, chatId, data, conn, res) => {
    const addressId = 1;
    
    try {
        const { title, purpose, description, date, time, duration, location, videoCallLink } = data;
        await conn.query(
            `INSERT INTO meeting (messageId, chatId, title, purpose, description, date, time, duration, location, addressId, videoCallLink)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [messageId, chatId, title, purpose, description, date, time, duration, location, addressId, videoCallLink]
        );
    } catch (err) {
        res.status(500).json({ responseCode: "0001C", message: "Error While entring meeting into database", err })

    }

}
