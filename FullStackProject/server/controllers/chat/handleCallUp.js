export const handleCallUp = async (messageId, chatId, data) => {
    const { callType, duration, callStatus, callQuality, participants } = data;

    await db.query(
        `INSERT INTO call_up (messageId, chatId, callType, duration, callStatus, callQuality, participants )
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [messageId, chatId, callType, duration, callStatus, callQuality, participants]
    );
}
