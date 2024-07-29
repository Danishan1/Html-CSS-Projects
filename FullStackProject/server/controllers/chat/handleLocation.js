export const handleLocation = async (messageId, chatId, data, conn, res) => {
    
    try {
        const { addressId } = data;
        await conn.query(
            `INSERT INTO location (messageId, chatId, addressId)
         VALUES (?, ?, ?)`,
            [messageId, chatId, addressId]
        );
    } catch (err) {
        res.status(500).json({ responseCode: "0001E", message: "Error While entring ocation into database", err })

    }
}
