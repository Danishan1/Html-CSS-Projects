import React, { useState, useEffect } from "react";
import style from "../css/ChatBox.module.css";
import MsgBox from "./MsgBox";
import CenteredDateDisplay from "./CenteredDateDisplay";
import ChatInput from "./ChatInput";
import { ForwardedBox } from "./ForwardedBox";
import ChatsData from "../helper/ChatsData";

export default function ChatBox() {
  // Used to store the chats
  const [chats, setChats] = useState(ChatsData);

  // for setting the latest date
  const [latestDate, setLatestDate] = useState(null);

  useEffect(() => {
    if (chats.length > 0) {
      const latestChatDate = chats[chats.length - 1].idDateTime.date;
      if (latestDate !== latestChatDate) {
        setLatestDate(latestChatDate);
      }
    }
  }, [chats, latestDate]);

  return (
    <div className={style.chatBox}>
      <div className={style.header}>Personal Chat</div>
      <div className={style.chatArea}>
        {chats.map((chat, index) => (
          <React.Fragment key={index}>
            {index === 0 ||
            chat.idDateTime.date !== chats[index - 1].idDateTime.date ? (
              <CenteredDateDisplay newDate={chat.idDateTime.date} />
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
