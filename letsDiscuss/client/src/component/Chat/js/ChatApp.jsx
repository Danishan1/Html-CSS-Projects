import React, { useEffect, useState } from "react";
import styles from "../css/ChatApp.module.css";
import ChatBoxDrop from "./ChatBoxDrop";
import UserListSection from "../../UserListSection/js/UserListSection";
import axios from "axios";
import Loading from "../../SpecialPages/js/Loading";
import ErrorPage from "../../SpecialPages/js/ErrorPage";
import { useSocket } from "../../context/socketContext";
import { setDocumentTitle } from "../../utils/setDocumentTitle";
import { setFavicon } from "../../utils/setFavicon";

const ChatApp = () => {
  setDocumentTitle("letsDiscuss");
  setFavicon("letsDiscuss");

  const [chatList, setChatList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openChatId, setOpenChatId] = useState(null);
  const socket = useSocket();

  useEffect(() => {
    const getUserChatList = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/chats/getChatList",
          { withCredentials: true }
        );

        if (
          response.data.responseCode === "00015" ||
          response.data.responseCode === "00016"
        ) {
          setChatList(response.data.data);
        } else if (response.data.responseCode === "00017") {
          setError(response.data.responseCode);
        }
      } catch (err) {
        console.log(err);
        setError("Error on Setting Chat App");
      } finally {
        setLoading(false);
      }
    };

    getUserChatList();
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("updateChatList", (newMessage) => {
      setChatList((prevChats) => {
        // Check if the chat is already in the list
        const existingChatIndex = prevChats.findIndex(
          (chat) => chat.chatId === newMessage.chatId
        );

        let updatedChats;

        if (existingChatIndex > -1) {
          // Update the existing chat
          updatedChats = prevChats.map((chat, index) =>
            index === existingChatIndex ? newMessage : chat
          );
        } else {
          // Add the new chat to the list
          updatedChats = [...prevChats, newMessage];
        }

        // Sort chats by latest message time
        return updatedChats.sort(
          (a, b) => new Date(b.lastMsgTime) - new Date(a.lastMsgTime)
        );
      });
    });

    // Cleanup on unmount
    return () => {
      socket.off("updateChatList");
    };
  }, [socket]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage statusCode="500" responseCode={error} />;
  }

  const openListCss =
    openChatId === null || openChatId === "" || openChatId === "list"
      ? styles.openSection
      : styles.closeSection;

  const openChatCss =
    openChatId !== null && openChatId !== "" && openChatId !== "list"
      ? styles.openSection
      : styles.closeSection;

  return (
    <div className={styles.chatApp}>
      <div className={styles.sectionA}></div>
      <div className={`${styles.sectionB} ${openListCss}`}>
        <UserListSection chatList={chatList} setOpenChatId={setOpenChatId} />
      </div>
      <div className={`${styles.sectionC} ${openChatCss}`}>
        <ChatBoxDrop openChatId={openChatId} setOpenChatId={setOpenChatId} />
      </div>
    </div>
  );
};

export default ChatApp;
