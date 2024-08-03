import React, { useState, useEffect } from "react";
import style from "../css/UserBox.module.css";

import dp from "../../images/defaultDp.jpg";
import { convertDate2time } from "../helper/convertDate2time";
import { reciptSetter } from "./reciptSetter";

const UserBox = ({ details, setUserChatOpenId, isOpen }) => {
  // API Call with userID to get the Data

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 890);

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 890 && window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let {
    chatId,
    chatName,
    lastMsgTime,
    message,
    status = "none",
    type,
    profilPath,
  } = details;

  // Formating things to appear better
  if (lastMsgTime) lastMsgTime = convertDate2time(lastMsgTime);
  if (type === "text")
    message = message.length > 25 ? `${message.slice(0, 25)}...` : message;
  else {
    message = type;
  }

  const userBoxCss =
    isOpen === true ? `${style.userBox} ${style.isOpen}` : `${style.userBox}`;

  const userMobileBoxCss = `${style.mobile} ${
    isOpen === true ? style.isOpen : ""
  }`;

  if (isMobileView)
    return (
      <div
        className={userMobileBoxCss}
        onClick={() => setUserChatOpenId(chatId)}
      >
        <div className={style.userDP}>
          <img src={dp} alt="DP" width={"50px"} />
        </div>
      </div>
    );

  return (
    <div className={userBoxCss} onClick={() => setUserChatOpenId(chatId)}>
      <div className={style.userDP}>
        <img src={dp} alt="DP" width={"50px"} />
      </div>
      <div className={style.userInfo}>
        <div className={style.name}>{chatName}</div>
        <div className={style.msgInfo}>
          <div className={style.msg}>{message}</div>
          <div className={style.infoTime}>
            <div className={style.time}>{lastMsgTime}</div>
            <div className={style.info}>{reciptSetter(status)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
