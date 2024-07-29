export const handleLocation = async (messageId, chatId, data) => {
    const { addressId } = data;

    await db.query(
        `INSERT INTO location (messageId, chatId, addressId)
         VALUES (?, ?, ?)`,
        [messageId, chatId, addressId]
    );
}