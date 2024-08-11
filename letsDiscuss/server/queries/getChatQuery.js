
/**
 *  - SQL query to retrieve all messages for a specific chat. 
 *  - The query dynamically fetches messages based on the provided chatId.
 *  - it has a column messageType, messageContent is Specific to each messageType 
 *  - MessageContent Seperator '|@@|'
 * 
 * 
 * @returns SQL Query
 */

import { getCallupMsgQuery } from "./getCallupMsgQuery.js"
import { getFileMsgQuery } from "./getFileMsgQuery.js"
import { getLocationMsgQuery } from "./getLocationMsgQuery.js"
import { getMediaMsgQuery } from "./getMediaMsgQuery.js"
import { getMeetingMsgQuery } from "./getMeetingMsgQuery.js"
import { getPaymentMsgQuery } from "./getPaymentMsgQuery.js"
import { getTextMsgQuery } from "./getTextMsgQuery.js"

export const getChatQuery = () => `WITH
    text_messages AS (${getTextMsgQuery()}),
    media_messages AS (${getMediaMsgQuery()}),
    meeting_messages AS (${getMeetingMsgQuery()}),
    payment_messages AS (${getPaymentMsgQuery()}),
    call_up_messages AS (${getCallupMsgQuery()}),
    location_messages AS (${getLocationMsgQuery()}),
    file_messages AS (${getFileMsgQuery()}),
    all_messages AS (
        SELECT * FROM text_messages UNION ALL
        SELECT * FROM media_messages UNION ALL
        SELECT * FROM meeting_messages UNION ALL
        SELECT * FROM payment_messages UNION ALL
        SELECT * FROM call_up_messages UNION ALL
        SELECT * FROM location_messages UNION ALL
        SELECT * FROM file_messages
    )
    -- Main query
SELECT
    m.messageType,
    m.messageContent,
    message.*,
    user.name
FROM
    all_messages m
    JOIN message ON m.messageId = message.messageId
    JOIN user ON message.userId = user.userId
ORDER BY
    m.messageId ASC;`