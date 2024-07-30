import React from "react";
import style from "../css/UserBox.module.css";
import { circleThik } from "../../Chat/helper/PlusButtonIcons";
import { cirlceFilled } from "../../Chat/helper/PlusButtonIcons";
import { time } from "../../Chat/helper/PlusButtonIcons";
import dp from "../../images/defaultDp.jpg";
import { convertDate2time } from "../helper/convertDate2time";

const UserBox = ({ details, setUserChatOpenId, isOpen }) => {
  // API Call with userID to get the Data

  let {
    chatId,
    chatName,
    lastMsgTime,
    message,
    status = "unsend",
    profilPath,
  } = details;

  if (lastMsgTime) lastMsgTime = convertDate2time(lastMsgTime);

  const reciptSetter = () => {
    if (status === "unsend")
      return <div className={style.timeStatus}>{time}</div>;
    else if (status === "sent") return circleThik;
    else if (status === "recieve") return cirlceFilled;
    else if (status === "read")
      return <div className={style.recieptRead}>{cirlceFilled}</div>;
  };

  const userBoxCss =
    isOpen === true ? `${style.userBox} ${style.isOpen}` : `${style.userBox}`;

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
            <div className={style.info}>{reciptSetter()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
