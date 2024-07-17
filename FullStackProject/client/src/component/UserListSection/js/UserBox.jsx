import React from "react";
import style from "../css/UserBox.module.css";
import myDP from "../../images/defaultDp.jpg";
import { circleThik } from "../../Chat/helper/PlusButtonIcons";
import { cirlceFilled } from "../../Chat/helper/PlusButtonIcons";

const UserBox = ({ userID, setUserChatOpenId, isOpen }) => {
  // API Call with userID to get the Data
  const details = {
    name: "Danishan",
    time: "4:20 PM",
    msg: "My name is Danishan.",
    readRecipt: 2,
    dp: myDP,
  };

  const { name, time, msg, dp, readRecipt } = details;

  const reciptSetter = () => {
    if (readRecipt === 0) return circleThik;
    else if (readRecipt === 1) return cirlceFilled;
    else if (readRecipt === 2)
      return <div className={style.recieptRead}>{cirlceFilled}</div>;
  };

  const userBoxCss =
    isOpen === true ? `${style.userBox} ${style.isOpen}` : `${style.userBox}`;

  return (
    <div className={userBoxCss} onClick={() => setUserChatOpenId(userID)}>
      <div className={style.userDP}>
        <img src={dp} alt="DP" width={"50px"} />
      </div>
      <div className={style.userInfo}>
        <div className={style.name}>{name}</div>
        <div className={style.msgInfo}>
          <div className={style.msg}>{msg}</div>
          <div className={style.infoTime}>
            <div className={style.time}>{time}</div>
            <div className={style.info}>{reciptSetter()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
