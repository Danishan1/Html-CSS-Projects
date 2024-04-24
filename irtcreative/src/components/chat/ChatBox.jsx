import React, { useState, useEffect } from "react";
import style from "./ChatBox.module.css";
import Chat from "./MsgBox";
import CenteredDateDisplay from "./CenteredDateDisplay";
import ChatInput from "./ChatInput";
import ContactChat from "../chat/ContactChat";

export default function ChatBox() {
  const [chats, setChats] = useState([
    {
      sender: { name: "Danishan", dp: "../../img/defaultDp.jpg" },
      message: "Unable to load, kindly report this...",
      isSent: false,
      idDateTime: { id: "~id2011", date: "Jan 20 2024", time: "10:30 AM" },
      type: "text",
    },
    {
      sender: { name: "Danishan", dp: "../../img/defaultDp.jpg" },
      message: "Unable to load, kindly report this...",
      isSent: false,
      idDateTime: { id: "~id2012", date: "Jan 22 2024", time: "10:30 AM" },
      type: "text",
    },
    {
      sender: { name: "SalmanDanishan", dp: "../../img/defaultDp.jpg" },
      message: "Unable to load, kindly report this...",
      isSent: true,
      idDateTime: { id: "~id2012", date: "Jan 22 2024", time: "10:30 AM" },
      type: "text",
    },
    {
      sender: { name: "SDanishan", dp: "../../img/defaultDp.jpg" },
      message: "Unable to load, kindly report this...",
      isSent: true,
      idDateTime: { id: "~id2012", date: "Jan 22 2024", time: "10:30 AM" },
      type: "text",
    },
    {
      sender: { name: "SaDanishan", dp: "../../img/defaultDp.jpg" },
      message: "Unable to load, kindly report this...",
      isSent: true,
      idDateTime: { id: "~id2012", date: "Jan 22 2024", time: "10:30 AM" },
      type: "text",
    },
    {
      sender: { name: "SalmDanishan", dp: "../../img/defaultDp.jpg" },
      message: "Unable to load, kindly report this...",
      isSent: true,
      idDateTime: { id: "~id2012", date: "Jan 22 2024", time: "10:30 AM" },
      type: "text",
    },
    {
      sender: { name: "Danishan", dp: "../../img/defaultDp.jpg" },
      message: "Unable to load, kindly report this...",
      isSent: false,
      idDateTime: { id: "~id2012", date: "Jan 28 2024", time: "10:30 AM" },
      type: "text",
    },
    // Add more chat data as needed
  ]);

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
      <div className={style.header}>Man</div>
      <div className={style.chatArea}>
        {/* {chats.map((chat, index) => (

          <Chat
            key={index}
            currentChat={chat}
            previousChat={index > 0 ? chats[index - 1] : null}
          />
        ))} */}

        {chats.map((chat, index) => (
          <React.Fragment key={index}>
            {index === 0 ||
            chat.idDateTime.date !== chats[index - 1].idDateTime.date ? (
              <React.Fragment>
                <CenteredDateDisplay newDate={chat.idDateTime.date} />
                {chat.type === "text" ? (
                  <Chat
                    key={index}
                    currentChat={chat}
                    previousChat={index > 0 ? chats[index - 1] : null}
                  />
                ) : chat.type === "contact" ? (
                  <ContactChat />
                ) : null}
              </React.Fragment>
            ) : (
              <Chat
                key={index}
                currentChat={chat}
                previousChat={index > 0 ? chats[index - 1] : null}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className={style.msgBox}>
        <ChatInput />
      </div>
    </div>
  );
}
