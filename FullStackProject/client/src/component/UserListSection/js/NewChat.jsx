import React, { useState } from "react";
import styles from "../css/NewChat.module.css";
import InputField from "../../Registration/js/InputField";
import axios from "axios";

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
  >
    <path
      fill="currentColor"
      d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"
    />
    <path
      fill="currentColor"
      d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
    />
  </svg>
);

export const NewChat = ({ setWhichListSection, setUserChatOpenId }) => {
  const [chatName, setChatName] = useState("private");
  const [userId, setUserId] = useState("");
  const [userIds, setUserIds] = useState([]);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const handleAddUser = () => {
    const trimmedUserId = userId.trim();
    const isValidUserId = /^[a-zA-Z0-9]{6}$/.test(trimmedUserId);

    if (isValidUserId) {
      const uppercasedUserId = trimmedUserId.toUpperCase();
      setUserIds((prev) => [...prev, uppercasedUserId]);
      setUserId("");
    } else {
      setIsError(true);
      setError("OOPs!!! Incorrect User ID");
      return;
    }
  };

  const handleRemove = (id) => {
    setUserIds((prevUserIds) => prevUserIds.filter((userId) => userId !== id));
  };

  const handleCreateChat = async () => {
    let result;
    try {
      //
      ///////////////////////////  Handle Private Chat //////////////////////////////////////////////////////////////////
      //

      if (chatName === "private") {
        const trimmedUserId = userId.trim();
        const isValidUserId = /^[a-zA-Z0-9]{6}$/.test(trimmedUserId);

        if (isValidUserId) {
          const uppercasedUserId = trimmedUserId.toUpperCase();
          // Call API or handle private chat creation logic here

          result = await axios.post(
            "http://localhost:5000/api/chats/createChat",
            { participantId: uppercasedUserId },
            { withCredentials: true }
          );

          if (result.data.responseId === "00013") {
            console.log("Chat Created", result.data.chatId);
            setWhichListSection("list");
            setUserChatOpenId(result.data.chatId);
          } else if (result.data.responseId === "00012")
            console.log(result.data.message);
          else if (result.data.responseId === "00018") {
            setIsError(true);
            setError("OOPs! User ID do not exist. Enter valid user ID");
            return;
          } else if (result.data.responseId === "00014") {
            console.log(result.data.error);
            setIsError(true);
            setError(`Server Error! Response code : ${result.data.responseId}`);
            return;
          }
        } else {
          setIsError(true);
          setError("OOPs! Incorrect User ID");
          return;
        }
        //
        //
      } else if (chatName === "group") {
        //
        ///////////////////////////  Handle Group Chat //////////////////////////////////////////////////////////////////
        //

        result = await axios.post(
          "http://localhost:5000/api/chats/createChat",
          { participantId: uppercasedUserId },
          { withCredentials: true }
        );

        if (result.data.responseId === "00013") {
          console.log("Chat Created", result.data.chatId);
          setWhichListSection("list");
          setUserChatOpenId(result.data.chatId);
        } else if (result.data.responseId === "00012")
          console.log(result.data.message);
        else if (result.data.responseId === "00018") {
          setIsError(true);
          setError("OOPs! User ID do not exist. Enter valid user ID");
          return;
        } else if (result.data.responseId === "00014") {
          console.log(result.data.error);
          setIsError(true);
          setError(`Server Error! Response code : ${result.data.responseId}`);
          return;
        }

        console.log("Creating group chat with userIds:", userIds);
      }
    } catch (err) {
      console.log(err.resonse);
    }

    // Clear inputs if needed
    setUserId("");
    setUserIds([]);
  };

  return (
    <div className={styles.newChat}>
      <div className={styles.addChat}>
        <div className={styles.buttons}>
          <div
            className={`${styles.btn} ${
              chatName === "private" ? styles.active : ""
            }`}
            onClick={() => setChatName("private")}
          >
            Private
          </div>
          <div
            className={`${styles.btn} ${
              chatName === "group" ? styles.active : ""
            }`}
            onClick={() => setChatName("group")}
          >
            Group
          </div>
        </div>
        <div className={styles.inputBtn}>
          <div
            className={styles.input}
            onFocus={() => {
              setIsError(false);
            }}
          >
            <InputField
              label="Write userId"
              type="text"
              name="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required={true}
            />
          </div>

          {chatName === "group" ? (
            <div className={styles.btn} onClick={handleAddUser}>
              Add
            </div>
          ) : (
            <></>
          )}
        </div>

        {isError && <p className={styles.error}>{error}</p>}

        {chatName === "group" && (
          <div className={styles.addedList}>
            {userIds.map((id, index) => (
              <div className={styles.listItem}>
                <p key={index} className={styles.userId}>
                  {id}
                </p>
                <div className={styles.close} onClick={() => handleRemove(id)}>
                  {closeIcon}
                </div>
              </div>
            ))}
          </div>
        )}

        <div
          className={`${styles.btn} ${styles.create}`}
          onClick={handleCreateChat}
        >
          Create {chatName === "group" ? "Group Chat" : "Private Chat"}
        </div>
      </div>
    </div>
  );
};
