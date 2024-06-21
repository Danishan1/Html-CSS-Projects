import React from "react";
import styles from "../css/ChatApp.module.css";
// import ChatBox from "./ChatBox";
import ChatBoxDrop from "./ChatBoxDrop";

const ChatApp = () => {
  return (
    <div className={styles.chatApp}>
      <div className={styles.sectionA}></div>
      <div className={styles.sectionB}></div>
      <div className={styles.sectionC}>
        <ChatBoxDrop />
      </div>
    </div>
  );
};

export default ChatApp;
