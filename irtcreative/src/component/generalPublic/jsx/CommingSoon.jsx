import React from "react";
import style from "../css/CommingSoon.module.css";

const CommingSoon = ({ text }) => {
  return (
    <>
      <div className={style.commingSoon}>{text}</div>
    </>
  );
};

export default CommingSoon;
