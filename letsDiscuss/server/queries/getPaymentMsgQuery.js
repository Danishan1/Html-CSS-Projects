// Use ';' after this statement
export const getPaymentMsgQuery = () => (
    `SELECT
        messageId,
        'payment' AS messageType,
        CONCAT (
            payFrom,
            '|@@|',
            payTo,
            '|@@|',
            amount,
            '|@@|',
            dueDate,
            '|@@|',
            payStatus,
            '|@@|',
            refNo,
            '|@@|',
            bankName,
            '|@@|',
            paymentMethod,
            '|@@|',
            currency
        ) AS messageContent
    FROM
        payment
    WHERE
        chatId = ?
    `
)
