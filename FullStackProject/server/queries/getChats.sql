-- Step 2: Fetch messages from the identified chats
SELECT
    m.messageId,
    m.messageType,
    m.messageContent,
    m.timestamp
FROM
    (
        SELECT
            messageId,
            'text' AS messageType,
            text AS messageContent,
            createdAt AS timestamp
        FROM
            text
        WHERE
            chatId = ?
        UNION ALL
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
            ) AS messageContent,
            createdAt AS timestamp
        FROM
            media
        WHERE
            chatId = ?
        UNION ALL
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
                addressId,
                '|@@|',
                location,
                '|@@|',
                videoCallLink
            ) AS messageContent,
            createdAt AS timestamp
        FROM
            meeting
        WHERE
            chatId = ?
        UNION ALL
        SELECT
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
            ) AS messageContent,
            createdAt AS timestamp
        FROM
            payment
        WHERE
            chatId = ?
        UNION ALL
        SELECT
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
            ) AS messageContent,
            createdAt AS timestamp
        FROM
            callUp
        WHERE
            chatId = ?
        UNION ALL
        SELECT
            messageId,
            'location' AS messageType,
            addressId AS messageContent,
            createdAt AS timestamp
        FROM
            location
        WHERE
            chatId = ?
        UNION ALL
        SELECT
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
            ) AS messageContent,
            createdAt AS timestamp
        FROM
            File
    ) m
ORDER BY
    m.messageId ASC;




-- CASE
--     WHEN m.senderId = ? THEN 'sent'
--     ELSE 'received'
-- END AS messageDirection