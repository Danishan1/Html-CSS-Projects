export const handleMeeting = async (messageId, chatId, data) => {
    const { title, purpose, description, date, time, duration, location, videoCallLink } = data;
    const addressId = null;

    await db.query(
        `INSERT INTO meeting (messageId, chatId, title, purpose, description, date, time, duration, location, addressId, videoCallLink)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [messageId, chatId, title, purpose, description, date, time, duration, location, addressId, videoCallLink]
    );

}
