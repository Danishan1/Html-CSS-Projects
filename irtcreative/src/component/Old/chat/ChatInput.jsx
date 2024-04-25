import React, { useState } from "react";
import style from "./ChatInput.module.css"; // Adjust the path to your CSS file

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    // adjustTextareaHeight();
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (event) => {
    // Check if Shift + Enter is pressed
    if (event.key === 'Enter' && event.shiftKey) {
      setMessage((prevMessage) => prevMessage + '\n');
      event.preventDefault(); // Prevent default Enter behavior (newline)
      // adjustTextareaHeight();
    }
  };

  // const adjustTextareaHeight = () => {
  //   const textarea = document.getElementById('adjustableInput');
  //   if (textarea) {
  //     textarea.style.height = 'auto'; // Reset height to auto to recalculate the scrollHeight

  //     textarea.style.height = `${textarea.scrollHeight}px`;
  //     textarea.style.maxHeight = `100px`;
  //   }
  // };

  return (
    <div className={style.chatInputContainer}>
      <div className={style.add}>
        <a href="www.google.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path fill="black" d="M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4z" />
          </svg>
        </a>
      </div>

      <textarea
        placeholder="Type your message..."
        id="adjustableInput"
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={style.inputField}
      />
      <button onClick={handleSendMessage} className={style.sendButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="black"
            d="m6.998 10.247l.435.76c.277.485.415.727.415.993s-.138.508-.415.992l-.435.761c-1.238 2.167-1.857 3.25-1.375 3.788c.483.537 1.627.037 3.913-.963l6.276-2.746c1.795-.785 2.693-1.178 2.693-1.832c0-.654-.898-1.047-2.693-1.832L9.536 7.422c-2.286-1-3.43-1.5-3.913-.963c-.482.537.137 1.62 1.375 3.788"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChatInput;
