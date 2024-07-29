export const splitMessageContent = (results) => {
    return results.map(row => {
        if (row.messageType === 'media') {
            const [mediaName, mediaPath, mediaSize, mediaType, duration, bitrate] = row.messageContent.split('|@@|');
            return row.messageContent = {
                mediaName, mediaPath, mediaSize, mediaType, duration, bitrate
            };

        } else if (row.messageType === 'meeting') {
            const [title, purpose, description, date, time, duration, location, addressId, videoCallLink
            ] = row.messageContent.split('|@@|');
            return row.messageContent = {
                title, purpose, description, date, time, duration, location, addressId, videoCallLink
            };

        } else if (row.messageType === 'text') {
            return row.messageContent = { text: row.messageContent };

        } else if (row.messageType === 'payment') {
            const [payFrom, payTo, amount, dueDate, payStatus, refNo, bankName, paymentMethod, currency
            ] = row.messageContent.split('|@@|');
           return  row.messageContent = {
                payFrom, payTo, amount, dueDate, payStatus, refNo, bankName, paymentMethod, currency
            };

        } else if (row.messageType === 'call_up') {
            const [callType, duration, callStatus, callQuality, participants] = row.messageContent.split('|@@|');
            return row.messageContent = {
                callType, duration, callStatus, callQuality, participants
            };

        } else if (row.messageType === 'location') {
            return row.messageContent = {
                addressId: row.messageContent
            };

        } else if (row.messageType === 'file') {
            const [fileName, filePath, fileSize, fileType
            ] = row.messageContent.split('|@@|');
            return row.messageContent = {
                fileName, filePath, fileSize, fileType
            };
        }
    });
}


















