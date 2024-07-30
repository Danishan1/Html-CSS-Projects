import React, { useState } from "react";
import style from "../css/UserListSection.module.css";
import UserBox from "./UserBox";
import { Button } from "../../Registration/js/Button";
import SearchBox from "./SearchBox";

const UserListSection = ({ chatList }) => {
  const [userChatOpenId, setUserChatOpenId] = useState("");

  console.log(chatList);

  return (
    <div className={style.userListSection}>
      <div className={style.searchBox}>
        <SearchBox />
      </div>
      <div className={style.topInfoBar}></div>
      <div className={style.bottomList}>
        <div className={style.sideInfoBar}></div>
        <div className={style.userList}>
          {chatList.map((chat) => (
            <UserBox
              key={chat.chatId}
              details={chat}
              setUserChatOpenId={
                userChatOpenId === chat ? () => {} : setUserChatOpenId
              }
              isOpen={userChatOpenId === chat ? true : false}
            />
          ))}
        </div>
      </div>
      <div className={style.newChatBtn}>
        <Button
          text={"New"}
          onClick={() => {
            console.log("New chat Btn Clicked");
          }}
        />
      </div>
    </div>
  );
};

export default UserListSection;
