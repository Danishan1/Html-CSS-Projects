import React, { useEffect, useState } from "react";
import style from "../css/UserListSection.module.css";
import UserBox from "./UserBox";
import { Button } from "../../Registration/js/Button";
import SearchBox from "./SearchBox";
import { NewChat } from "./NewChat";
import { NoChatPage } from "../../Chat/js/NoChatPage";

const UserListSection = ({ chatList, setOpenChatId }) => {
  const [userChatOpenId, setUserChatOpenId] = useState("");
  const [whichListSection, setWhichListSection] = useState(null);

  useEffect(() => {
    setOpenChatId(userChatOpenId);
  }, [userChatOpenId, setOpenChatId]);

  const chatListMap = () => {
    return chatList.length > 0 ? (
      chatList.map((chat) => (
        <UserBox
          key={chat.chatId}
          details={chat}
          setUserChatOpenId={setUserChatOpenId}
          isOpen={userChatOpenId === chat.chatId}
        />
      ))
    ) : (
      <NoChatPage />
    );
  };

  const setListSection = () => {
    let content;

    switch (whichListSection) {
      case "newChat":
        content = <NewChat />;
        break;
      default:
        content = chatListMap();
    }

    return content;
  };

  return (
    <div className={style.userListSection}>
      <div className={style.searchBox}>
        <SearchBox />
      </div>
      <div className={style.topInfoBar}></div>
      <div className={style.bottomList}>
        <div className={style.sideInfoBar}></div>
        <div className={style.userList}>{setListSection()}</div>
      </div>
      <div className={style.newChatBtn}>
        <Button
          text={"New"}
          onClick={() => {
            setWhichListSection("newChat"); // Ensure case matches
          }}
        />
      </div>
    </div>
  );
};

export default UserListSection;
