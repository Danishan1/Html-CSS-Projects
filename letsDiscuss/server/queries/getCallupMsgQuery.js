// Use ';' after this statement
export const getCallupMsgQuery = () => (
    `SELECT
        messageId,
        'call_up' AS messageType,
        CONCAT (
            callType,
            '|@@|',
            duration,
            '|@@|',
            callStatus,
            '|@@|',
            callQuality,
            '|@@|',
            participants
        ) AS messageContent
    FROM
        call_up
    WHERE
        chatId = ?
    `
)