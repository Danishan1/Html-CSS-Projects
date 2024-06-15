import React, { useState } from "react";
import style from "../css/MeetingBox.module.css";
import { Calendar } from "../../Calender/js/Calendar";
import InputTime from "../../Registration/js/InputTime";

export const MeetingBox = ({ handleData }) => {
  const handleDateClick = (date) => {
    console.log("Date clicked:", date);
    // Add your custom logic here
  };

  const [minute, setMinute] = useState(0);
  console.log(minute);

  return (
    <div className={style.meetingBox}>
      <div className={style.box1}>
        <div className={style.box2}>
          <Calendar handleDateClick={handleDateClick} />
        </div>
        <div className={style.box3}>
          <InputTime label={"Start Time"} onTimeChange={setMinute} />
        </div>
      </div>
    </div>
  );
};
