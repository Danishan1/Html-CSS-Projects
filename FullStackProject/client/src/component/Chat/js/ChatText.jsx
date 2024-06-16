import React from "react";
import styles from "../css/ChatText.module.css";

const ChatText = ({ message }) => (
  <div className={styles.chatText}>{message}</div>
);

export default ChatText;
