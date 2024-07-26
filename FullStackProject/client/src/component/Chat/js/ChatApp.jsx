import React from "react";
import styles from "../css/ChatApp.module.css";
import ChatBoxDrop from "./ChatBoxDrop";
import UserListSection from "../../UserListSection/js/UserListSection";

const ChatApp = () => {
  return (
    <div className={styles.chatApp}>
      <div className={styles.sectionA}></div>
      <div className={styles.sectionB}>
        <UserListSection />
      </div>
      <div className={styles.sectionC}>
        <ChatBoxDrop />
      </div>
    </div>
  );
};

export default ChatApp;
