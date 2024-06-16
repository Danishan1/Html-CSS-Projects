import React, { useState } from "react";
import style from "../css/ForwardedBox.module.css";
import { MeetingBox } from "./MeetingBox";

export const ForwardedBox = ({ type }) => {
  const [meetingData, setMeetingData] = useState("");


  return (
    <div className={style.forwardedBox}>
      <MeetingBox setMeetingData={setMeetingData} />
    </div>
  );
};
