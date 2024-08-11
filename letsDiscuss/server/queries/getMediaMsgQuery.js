// Use ';' after this statement
export const getMediaMsgQuery = () => (
    `
    SELECT
        messageId,
        'media' AS messageType,
        CONCAT (
            mediaName,
            '|@@|',
            mediaPath,
            '|@@|',
            mediaSize,
            '|@@|',
            mediaType,
            '|@@|',
            duration,
            '|@@|',
            bitrate
        ) AS messageContent
    FROM
        media
    WHERE
        chatId = ?
    `
)