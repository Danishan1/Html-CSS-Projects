import pool from "../../config/db.js";


export const handleConnect = async (io, socket) => {
    const session = socket.request.session;
    const userId = session.userId;
    console.log(`A User Connected (User ID: ${userId}, Session Id: ${session.id}, Socket ID: ${socket.id})`);


    const query = `SELECT DISTINCT chatId FROM chat_list WHERE userId = ?`
    try {
        const [userChats] = await pool.query(query, [userId]);
        let listChatIds = [];
        userChats.forEach((userChat) => { socket.join(userChat.chatId); listChatIds.push(userChat.chatId); })
        // console.log(`User ${userId} joined chats: ${listChatIds.join(', ')}`);

    } catch (err) {
        console.log(err);
    }

};
