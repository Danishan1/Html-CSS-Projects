import React from "react";
import style from "../css/ForwardedBox.module.css";

export const ForwardedBox = ({ type }) => {
  return <div className={style.forwardedBox}>{type}</div>;
};
