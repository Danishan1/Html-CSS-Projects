import React from "react";
import style from "../css/ForwardedBox.module.css";
// import { MeetingBox } from "./MeetingBox";
import { CalendarBox } from "./CalendarBox";

export const ForwardedBox = ({ type }) => {
  return (
    <div className={style.forwardedBox}>
      <CalendarBox />
    </div>
  );
};
