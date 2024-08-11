// Use ';' after this statement
export const getMeetingMsgQuery = () => (
    `
    SELECT
        messageId,
        'meeting' AS messageType,
        CONCAT (
            title,
            '|@@|',
            purpose,
            '|@@|',
            description,
            '|@@|',
            date,
            '|@@|',
            time,
            '|@@|',
            duration,
            '|@@|',
            location,
            '|@@|',
            addressId,
            '|@@|',
            videoCallLink
        ) AS messageContent
    FROM
        meeting
    WHERE
        chatId = ?
    `
)
