import React, { useState, useRef, useEffect } from "react";
import style from "../css/ChatInput.module.css"; // Adjust the path to your CSS file
import { handleKeyDown } from "../helper/handleKeys";
import { adjustTextareaHeight } from "../helper/handleTextAreaHeight";
import PlusButton from "./PlusButton";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [showPlus, setShowPlus] = useState(false);
  const textareaRef = useRef(null);
  const addRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      adjustTextareaHeight(textareaRef);
    }
  }, [message]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (addRef.current && !addRef.current.contains(event.target)) {
        setShowPlus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  const showPlusClass = showPlus
    ? `${style.showPlus} ${style.show}`
    : style.showPlus;

  return (
    <div className={style.chatInputContainer}>
      <div className={showPlusClass}>
        <PlusButton />
      </div>
      <div className={style.add} ref={addRef} onClick={() => setShowPlus(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path fill="black" d="M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4z" />
        </svg>
      </div>

      <textarea
        placeholder="Type your message..."
        id="adjustableInput"
        ref={textareaRef}
        value={message}
        onChange={handleInputChange}
        onKeyDown={(e) => handleKeyDown(e, setMessage, handleSendMessage)}
        className={style.inputField}
        style={{ resize: "none", overflow: "hidden" }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        onClick={handleSendMessage}
        className={style.sendButton}
      >
        <path
          fill="black"
          d="m6.998 10.247l.435.76c.277.485.415.727.415.993s-.138.508-.415.992l-.435.761c-1.238 2.167-1.857 3.25-1.375 3.788c.483.537 1.627.037 3.913-.963l6.276-2.746c1.795-.785 2.693-1.178 2.693-1.832c0-.654-.898-1.047-2.693-1.832L9.536 7.422c-2.286-1-3.43-1.5-3.913-.963c-.482.537.137 1.62 1.375 3.788"
        />
      </svg>
    </div>
  );
};

export default ChatInput;
