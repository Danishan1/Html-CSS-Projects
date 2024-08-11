// Use ';' after this statement
export const getFileMsgQuery = () => (
    `SELECT
        messageId,
        'file' AS messageType,
        CONCAT (
            fileName,
            '|@@|',
            filePath,
            '|@@|',
            fileSize,
            '|@@|',
            fileType
        ) AS messageContent
    FROM
        file
    WHERE
        chatId = ?
    `
)

