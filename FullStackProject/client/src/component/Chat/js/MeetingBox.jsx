import React, { useState } from "react";
import style from "../css/MeetingBox.module.css";
import { Calendar } from "../../Calender/js/Calendar";
import InputTime from "../../Registration/js/InputTime";
import InputField from "../../Registration/js/InputField";

export const MeetingBox = ({ handleData }) => {
  const handleDateClick = (date) => {
    console.log("Date clicked:", date);
    // Add your custom logic here
  };

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div className={style.meetingBox}>
      <div className={style.titleCalenderTime}>
        <div className={style.title}>
          <InputField
            label="Title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required={true}
          />
        </div>
        <div className={style.calenderTime}>
          <div className={style.calender}>
            <Calendar handleDateClick={handleDateClick} />
          </div>
          <div className={style.time}>
            <InputTime label={"Start Time"} onTimeChange={setStartTime} />
            <InputTime label={"End Time"} onTimeChange={setEndTime} />
          </div>
        </div>
      </div>
      {/* <div className={style.box1}>
        <div className={style.box2}>
          <Calendar handleDateClick={handleDateClick} />
        </div>
        <div className={style.box3}>
          <InputTime label={"Start Time"} onTimeChange={setStartTime} />
          <InputTime label={"End Time"} onTimeChange={setEndTime} />
        </div>
      </div> */}
    </div>
  );
};
