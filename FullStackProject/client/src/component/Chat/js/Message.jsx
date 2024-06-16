import React from "react";
import ChatText from "./ChatText";

const handleText = (Data) => <ChatText message={Data} />;

const Message = ({ msgData, typeOfMsg }) => {
  let content = "Default Text";

  switch (typeOfMsg) {
    case "text":
      content = handleText(msgData);
      break;
    case "meet":
      content = msgData.map((item, index) => {
      });

    default:
      content = handleText(
        "Haven't got type of Messaage, kindly contact to the organisation."
      );
  }

  return <>{content}</>;
};

export default Message;
