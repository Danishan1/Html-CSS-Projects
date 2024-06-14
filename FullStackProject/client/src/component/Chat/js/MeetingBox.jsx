import React from "react";
import style from "../css/MeetingBox.module.css";
import { Calendar } from "../../Calender/js/Calendar";

export const MeetingBox = ({ handleData }) => {
  const handleDateClick = (date) => {
    console.log("Date clicked:", date);
    // Add your custom logic here
  };

  return (
    <div className={style.meetingBox}>
      <div className={style.box1}>
        <div className={style.box2}>
          <Calendar handleDateClick={handleDateClick} />
        </div>
        <div className={style.box3}></div>
      </div>
    </div>
  );
};
