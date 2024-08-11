// Use ';' after this statement
export const getTextMsgQuery = () => (
    `SELECT
        messageId,
        'text' AS messageType,
        text AS messageContent
    FROM
        text
    WHERE
        chatId = ?
    `
)
