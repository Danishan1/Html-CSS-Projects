import React, { useState, useEffect, useRef } from "react";
import style from "../css/ChatBox.module.css";
import MsgBox from "./MsgBox";
import CenteredDateDisplay from "./CenteredDateDisplay";
import ChatInput from "./ChatInput";
import { ForwardedBox } from "./ForwardedBox";
import axios from "axios";
import Loading from "../../SpecialPages/js/Loading";
import { formatDate } from "../helper/plusButton/formateDate";
import { NoChatPage } from "./NoChatPage";
import { left } from "../helper/PlusButtonIcons";
import { useSocket } from "../../context/socketContext";

export default function ChatBox({ openChatId, setOpenChatId }) {
  const [chats, setChats] = useState([]);
  const [chatInfo, setChatInfo] = useState([]);
  const [isChatEnd, setIsChatEnd] = useState("");
  const [loading, setLoading] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0); // Track unread messages
  const [lastReadIndex, setLastReadIndex] = useState(null); // Track the last read message index
  const socket = useSocket();

  const chatAreaRef = useRef(null);
  const bottomRef = useRef(null);

  // Fetch initial chat data when chatId changes
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
        setChatInfo(response.data.chat.chatDetails);

        // Assuming you have some way to know which messages are unread
        const unreadMessages = response.data.chat.result.filter(chat => !chat.isRead);
        setUnreadCount(unreadMessages.length);
        setLastReadIndex(response.data.chat.result.length - unreadMessages.length);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching chat:", error);
        setLoading(false);
      }
    };

    if (openChatId) {
      fetchChat();
    }
  }, [openChatId]);

  // Scroll to the last read message whenever chats change
  useEffect(() => {
    const scrollToLastRead = () => {
      if (chatAreaRef.current) {
        const readPosition = chatAreaRef.current.children[lastReadIndex];
        if (readPosition) {
          readPosition.scrollIntoView({ behavior: "smooth" });
        } else if (bottomRef.current) {
          bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    setTimeout(scrollToLastRead, 100);
  }, [chats, lastReadIndex]);

  // Handle sending a message
  const handleSend = async (message) => {
    const messageData = {
      chatId: openChatId,
      forwardedChat: false,
      msgType: "text",
      messageData: { text: message },
    };

    // Send message to the server
    socket.emit("sendMessage", messageData);

    socket.on("sendMessage", (response) => {
      // console.log("sendMessage", response);
    });

    // Optionally, update UI immediately (optimistic update)
    // setChats((prevChats) => [
    //   ...prevChats,
    //   { ...messageData, createdAt: new Date().toISOString() },
    // ]);
  };

  // Listen for new messages
  useEffect(() => {
    if (!socket) return;

    socket.on("newMessage", (newMessage) => {
      if (newMessage.chat.chatDetails[0].chatId === openChatId) {
        const result = newMessage.chat.result;
        if (result.length > 0) {
          setChats((prevChats) => [...prevChats, result[0]]);

          // If the user hasn't scrolled, consider it unread
          if (chatAreaRef.current.scrollTop < chatAreaRef.current.scrollHeight - chatAreaRef.current.clientHeight) {
            setUnreadCount((prevUnreadCount) => prevUnreadCount + 1);
            console.log(`Chat ID ${openChatId} has ${unreadCount + 1} unread messages.`);
          }
        }
      }
    });

    // Cleanup on unmount
    return () => {
      socket.off("newMessage");
    };
  }, [socket, openChatId, unreadCount]);

  // Handle user scrolling to mark messages as read
  const handleScroll = () => {
    if (chatAreaRef.current.scrollTop + chatAreaRef.current.clientHeight >= chatAreaRef.current.scrollHeight) {
      setUnreadCount(0); // Reset unread count when user scrolls to bottom
      setLastReadIndex(chats.length); // Mark all as read
    }
  };

  const chatMap = () => {
    return chats.map((chat, index) => (
      <React.Fragment key={index}>
        {index === 0 ||
        formatDate(chat.createdAt) !==
          formatDate(chats[index - 1].createdAt) ? (
          <CenteredDateDisplay newDate={chat.createdAt} />
        ) : null}

        <MsgBox
          key={index}
          currentChat={chat}
          previousChat={index > 0 ? chats[index - 1] : null}
        />
      </React.Fragment>
    ));
  };

  if (openChatId === null || openChatId === "") {
    return <NoChatPage height="100vh" />;
  } else if (loading) {
    return <Loading windowHeight="100vh" windowWidth="100%" />;
  }

  return (
    <div className={style.chatBox}>
      <div className={style.header}>
        <div
          className={style.backToListBtn}
          onClick={() => setOpenChatId("list")}
        >
          {left}
        </div>
        <div className={style.chatName}>
          {chatInfo.length > 0 ? chatInfo[0].chatName : "Chat"}
        </div>
      </div>
      <div className={style.chatArea} ref={chatAreaRef} onScroll={handleScroll}>
        {chats.length > 0 ? chatMap() : <NoChatPage height="100%" />}
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
