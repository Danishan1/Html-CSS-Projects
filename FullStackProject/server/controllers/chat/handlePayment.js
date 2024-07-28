export const handlePayment = async (messageId, chatId, data) => {
    const { payFrom, payTo, amount, dueDate, payStatus, refNo, bankName, paymentMethod, currency } = data;

    await db.query(
        `INSERT INTO payment (messageId, chatId, payFrom, payTo, amount, dueDate, payStatus, refNo, bankName, paymentMethod, currency )
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [messageId, chatId, payFrom, payTo, amount, dueDate, payStatus, refNo, bankName, paymentMethod, currency]
    );
}
