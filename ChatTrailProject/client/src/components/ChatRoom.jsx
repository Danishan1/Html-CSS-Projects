import React, { useEffect, useState, useContext } from "react";
import io from "socket.io-client";
import AuthContext from "../context/AuthContext";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const { user } = useContext(AuthContext);
  const socket = io("http://localhost:5000");

  useEffect(() => {
    socket.emit("join", user.id);

    socket.on("receiveMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, [user.id, socket]);

  const sendMessage = () => {
    socket.emit("sendMessage", { chatId: user.id, message });
    setMessages((prevMessages) => [
      ...prevMessages,
      { userId: user.id, message },
    ]);
    setMessage("");
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.userId}</strong>: {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;
