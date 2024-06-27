import React from "react";
import Style from "../css/FileBox.module.css";

const FileBox = ({ content}) => {
  return (
    <>
      <div>Uploaded File : {content}</div>
    </>
  );
};

export default FileBox;
