import React from "react";
import ChatText from "./ChatText";

const handleText = (Data) => <ChatText message={Data} />;

const Message = ({ Data, typeOfMsg }) => {
  let content = "Default Text";

  switch (typeOfMsg) {
    case "text":
      content = handleText(Data);
  }

  return <>{content}</>;
};

export default Message;
