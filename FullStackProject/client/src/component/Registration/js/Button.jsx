import React from "react";
import style from "../css/Button.module.css";

////////////////////////////////////////////////////////////////
// Code : ABAB005
export const Button = ({ text, onClick }) => {
  return (
    <>
      <div className={style.btn} onClick={(e) => onClick(e)}>
        {text}
      </div>
    </>
  );
};
