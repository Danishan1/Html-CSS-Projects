import React from "react";
import PropTypes from "prop-types";
import styles from "./MsgBox.module.css";
import defaultDp from "../../img/defaultDp.svg";


const ChatBox = ({ sender, message, idDateTime, isSent }) => {
  const chatBoxClasses = isSent
    ? `${styles.chatBox} ${styles.sent}`
    : `${styles.chatBox} ${styles.received}`;

  return (
    <div className={chatBoxClasses}>
      <div className={styles.content}>
        <SenderInfo sender={sender} />
        <MessageText message={message} />
        <IdDateTime idDateTime={idDateTime} />
      </div>
      <ShareIcon />
    </div>
  );
};

const SenderInfo = ({ sender }) => (
  <div className={styles.senderInfo}>
    <div className={styles.dp}>
      <a href="www.google.com">
        <img src={defaultDp} height={40} alt="Profile" />
      </a>
    </div>
    <div className={styles.name}>{sender.name}</div>
  </div>
);

const MessageText = ({ message }) => (
  <div className={styles.msgText}>{message}</div>
);

const IdDateTime = ({ idDateTime }) => (
  <div className={styles.idDateTime}>
    <div className={styles.id}>{idDateTime.id}</div>
    <div className={styles.time}>{idDateTime.time}</div>
  </div>
);

const ShareIcon = () => (
  <div className={styles.share}>
    <a href="www.google.com">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="black"
          fill-rule="evenodd"
          d="M18 2a3 3 0 0 0-2.947 3.562l-7.114 4.15a3 3 0 1 0 0 4.578l7.114 4.148a3 3 0 1 0 1.008-1.727l-7.114-4.15a3.011 3.011 0 0 0 0-1.123l7.114-4.15A3 3 0 1 0 18 2"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </div>
);

ChatBox.propTypes = {
  sender: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  idDateTime: PropTypes.object.isRequired,
  isSent: PropTypes.bool.isRequired,
};

SenderInfo.propTypes = {
  sender: PropTypes.object.isRequired,
};

MessageText.propTypes = {
  message: PropTypes.string.isRequired,
};

IdDateTime.propTypes = {
  idDateTime: PropTypes.object.isRequired,
};

export default ChatBox;
