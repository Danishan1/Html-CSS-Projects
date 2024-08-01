import React, { useState, useEffect, useRef } from "react";
import style from "../css/ChatBox.module.css";
import MsgBox from "./MsgBox";
import CenteredDateDisplay from "./CenteredDateDisplay";
import ChatInput from "./ChatInput";
import { ForwardedBox } from "./ForwardedBox";
import axios from "axios";
import Loading from "../../SpecialPages/js/Loading";
import { formatDate } from "../helper/plusButton/formateDate";

export default function ChatBox({ openChatId }) {
  // Used to store the chats
  const [chats, setChats] = useState([]);
  const [isChatEnd, setIsChatEnd] = useState("");
  const [loading, setLoading] = useState(true);

  // Reference for the chat area and bottom div
  const chatAreaRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/chats/getChat",
          { chatId: openChatId },
          { withCredentials: true }
        );

        setIsChatEnd(response.data.chat.isEnd);
        setChats(response.data.chat.result);
        setLoading(false); // Set loading to false after fetching chats
      } catch (error) {
        console.error("Error fetching chat:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    if (openChatId) {
      fetchChat();
    }
  }, [openChatId]);

  useEffect(() => {
    // Scroll to the bottom of the chat area whenever chats state changes
    const scrollToBottom = () => {
      if (bottomRef.current) {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Adding a slight delay to ensure all elements are rendered before scrolling
    setTimeout(scrollToBottom, 100);
  }, [chats]);

  const handleSend = async (message) => {
    await axios.post(
      "http://localhost:5000/api/chats/addMsg",
      {
        chatId: openChatId,
        forwardedChat: false,
        msgType: "text",
        messageData: { text: message },
      },
      { withCredentials: true }
    );
  };

  if (loading) {
    return <Loading windowHeight="100vh" windowWidth="100%" />;
  }

  return (
    <div className={style.chatBox}>
      <div className={style.header}>Personal Chat</div>
      <div className={style.chatArea} ref={chatAreaRef}>
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
        <div ref={bottomRef}></div>
      </div>
      <div className={style.msgBox}>
        <div>
          <ForwardedBox type={"Pending - Forwarded Box"} />
        </div>
        <div className={style.chatInput}>
          <ChatInput onSendMessage={(message) => handleSend(message)} />
        </div>
      </div>
    </div>
  );
}
