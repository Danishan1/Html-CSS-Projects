import React from "react";
import style from "../css/Button.module.css";

// Code: ABAB003
export const Button = ({ text, link = "#", target = "_blank" }) => {
  return (
    <>
      <div className={style.btn}>
        <a href={link} target={target} className={style.link}>
          {text}
        </a>{" "}
      </div>
    </>
  );
};


// Code : ABAB004
export const ButtonL = ({ text, link = "#", target = "_blank" }) => {
  const btnL = `${style.btn} ${style.btnL}`;
  return (
    <>
      <div className={btnL}>
        <a href={link} target={target} className={style.link}>
          {text}
        </a>{" "}
      </div>
    </>
  );
};

// Code : ABAB005
export const ButtonLL = ({ text, link = "#", target = "_blank" }) => {
  const btnL = `${style.btn} ${style.btnLL}`;
  return (
    <>
      <div className={btnL}>
        <a href={link} target={target} className={style.link}>
          {text}
        </a>{" "}
      </div>
    </>
  );
};


// Code : ABAB006
export const ButtonS = ({ text, link = "#", target = "_blank" }) => {
  const btnL = `${style.btn} ${style.btnS}`;
  return (
    <>
      <div className={btnL}>
        <a href={link} target={target} className={style.link}>
          {text}
        </a>{" "}
      </div>
    </>
  );
};

export default Button;
