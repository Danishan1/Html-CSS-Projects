import React, { useState, useEffect } from "react";
import style from "../css/ChatBox.module.css";
import MsgBox from "./MsgBox";
import CenteredDateDisplay from "./CenteredDateDisplay";
import ChatInput from "./ChatInput";
import { ForwardedBox } from "./ForwardedBox";
import axios from "axios";
import { formatDate } from "../helper/plusButton/formateDate";

export default function ChatBox({ openChatId }) {
  // Used to store the chats
  const [chats, setChats] = useState([]);
  const [isChatEnd, setIsChatEnd] = useState("");

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/chats/getChat",
          { chatId: openChatId },
          { withCredentials: true }
        );
        console.log(response.data.chat.result);
        setIsChatEnd(response.data.chat.isEnd);
        setChats(response.data.chat.result);
      } catch (error) {
        console.error("Error fetching chat:", error);
      }
    };

    if (openChatId) {
      fetchChat();
    }
  }, [openChatId]);

  return (
    <div className={style.chatBox}>
      <div className={style.header}>Personal Chat</div>
      <div className={style.chatArea}>
        {chats.map((chat, index) => (
          <React.Fragment key={index}>
            {index === 0 ||
            formatDate(chat.createdAt) !==
              formatDate(chats[index - 1].createdAt) ? (
              <CenteredDateDisplay newDate={chat.createdAt} />
            ) : (
              <></>
            )}

            <MsgBox
              key={index}
              currentChat={chat}
              previousChat={index > 0 ? chats[index - 1] : null}
            />
          </React.Fragment>
        ))}
      </div>
      <div className={style.msgBox}>
        <div>
          <ForwardedBox type={"Pending - Forwarded Box"} />
        </div>
        <div className={style.chatInput}>
          <ChatInput onSendMessage={() => console.log("Send")} />
        </div>
      </div>
    </div>
  );
}
