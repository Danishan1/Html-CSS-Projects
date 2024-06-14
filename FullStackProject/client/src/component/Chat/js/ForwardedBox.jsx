import React from "react";
import style from "../css/ForwardedBox.module.css";
import { MeetingBox } from "./MeetingBox";

export const ForwardedBox = ({ type }) => {
  return (
    <div className={style.forwardedBox}>
      <MeetingBox />
    </div>
  );
};
