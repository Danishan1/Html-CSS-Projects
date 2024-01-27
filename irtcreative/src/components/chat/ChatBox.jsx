import React from "react";
import style from "./ChatBox.module.css";
import Chat from "./MsgBox";


export default function ChatBox() {
  var name, dp, msg, date, time, id, isSent;
  name = "Danishan";
  dp = "../../img/defaultDp.jpg";
  msg = "Unable to load, kindly report this...";
  isSent = false;
  date = "Jan 20 2024";
  time = "10:30 AM";
  id = "id2012"; 
  id = "~" + id; 

  const sender = { name, dp },
    idDateTime = { id , date, time };

  return (
    <div className={style.chatBox}>
      <div className={style.header}>Man</div>
      <div className={style.chatArea}>
        <Chat
          sender={sender}
          message={msg}
          idDateTime={idDateTime}
          isSent={isSent}
        />
        {/* <Chat
          sender={sender}
          message={msg}
          idDateTime={idDateTime}
          isSent={isSent}
        /> */}
      </div>
      <div className={style.msgBox}>Ran</div>
    </div>
  );
}
