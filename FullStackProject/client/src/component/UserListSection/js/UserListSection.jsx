import React, { useState } from "react";
import style from "../css/UserListSection.module.css";
import UserBox from "./UserBox";
import { Button } from "../../Registration/js/Button";
import SearchBox from "./SearchBox";

const UserListSection = () => {
  const [userChatOpenId, setUserChatOpenId] = useState("");
  const userChats = ["A01", "A02", "A03", "A04", "A05", "A06", "A07", "A08"];

  return (
    <div className={style.userListSection}>
      <div className={style.searchBox}>
        <SearchBox />
      </div>
      <div className={style.topInfoBar}></div>
      <div className={style.bottomList}>
        <div className={style.sideInfoBar}></div>
        <div className={style.userList}>
          {userChats.map((userId) => (
            <UserBox
              userID={userId}
              setUserChatOpenId={
                userChatOpenId === userId ? () => {} : setUserChatOpenId
              }
              isOpen={userChatOpenId === userId ? true : false}
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
