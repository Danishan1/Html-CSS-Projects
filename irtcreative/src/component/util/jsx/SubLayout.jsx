import React from "react";
import style from "../css/SubLayout.module.css";

const SubLayout = ({ content }) => {
  return (
    <>
      <div className={style.main}>{content}</div>
    </>
  );
};

export default SubLayout;
