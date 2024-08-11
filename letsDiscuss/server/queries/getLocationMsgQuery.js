// Use ';' after this statement
export const getLocationMsgQuery = () => (
    `SELECT
            messageId,
            'location' AS messageType,
            addressId AS messageContent
        FROM
            location
        WHERE
            chatId = ?
    `
)
