export const updateChatList = (newMessage) => {
    let chatDetails = {};

    chatDetails.chatId = newMessage.chat.chatDetails[0].chatId;
    chatDetails.chatName = newMessage.chat.chatDetails[0].chatName;
    chatDetails.lastMsgTime = newMessage.chat.result[0].createdAt;
    chatDetails.message = newMessage.chat.result[0].messageType === 'text' ?
        newMessage.chat.result[0].messageContent.text : '';
    chatDetails.messageId = newMessage.chat.result[0].messageId;
    chatDetails.status = newMessage.chat.result[0].status;
    chatDetails.type = newMessage.chat.result[0].messageType;

    return chatDetails;
}