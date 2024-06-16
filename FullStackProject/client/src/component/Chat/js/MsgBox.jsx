import React from "react";
import style from "../css/MsgBox.module.css";
import Message from "./Message";

const MsgBox = ({ currentChat, previousChat }) => {
  const isSameSender =
    previousChat && previousChat.sender.name === currentChat.sender.name;

  const chatBoxSendSender = isSameSender
    ? style.continuation
    : style.newMessage;
  const chatBoxIsSent = currentChat.isSent
    ? `${style.chatBox} ${style.sent}`
    : `${style.chatBox} ${style.received}`;

  const chatBoxClasses = `${chatBoxIsSent} ${chatBoxSendSender}`;

  return (
    <div className={style.chats}>
      <div className={chatBoxClasses}>
        <div className={style.content}>
          <Message msgData={currentChat.msgData} typeOfMsg={currentChat.type} />
          <IdDateTime idDateTime={currentChat.idDateTime} />
        </div>
        <ShareIcon />
      </div>
    </div>
  );
};

// Helper Components ##################################################################

const IdDateTime = ({ idDateTime }) => (
  <div className={style.idDateTime}>
    <p className={style.id}>{idDateTime.id}</p>
    <p className={style.time}>{idDateTime.time}</p>
  </div>
);

const ShareIcon = () => (
  <div className={`${style.share}`}>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="black"
          fillRule="evenodd"
          d="M18 2a3 3 0 0 0-2.947 3.562l-7.114 4.15a3 3 0 1 0 0 4.578l7.114 4.148a3 3 0 1 0 1.008-1.727l-7.114-4.15a3.011 3.011 0 0 0 0-1.123l7.114-4.15A3 3 0 1 0 18 2"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
);

export default MsgBox;
