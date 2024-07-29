export const handleCallUp = async (messageId, chatId, data, conn, res) => {
    
    try {
        const { callType, duration, callStatus, callQuality, participants } = data;
        await conn.query(
            `INSERT INTO call_up (messageId, chatId, callType, duration, callStatus, callQuality, participants )
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [messageId, chatId, callType, duration, callStatus, callQuality, participants]
        );
    } catch (err) {
        res.status(500).json({ responseCode: "00020", message: "Error While entring call_up into database", err })

    }
}
