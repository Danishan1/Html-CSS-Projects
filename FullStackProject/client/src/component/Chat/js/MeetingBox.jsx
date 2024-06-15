import React, { useState } from "react";
import styles from "../css/MeetingBox.module.css";
import { Calendar } from "../../Calender/js/Calendar";
import InputTime from "../../Registration/js/InputTime";
import InputField from "../../Registration/js/InputField";
import CustomDropdown from "../../Registration/helper/CustomDropdown";
import { Button } from "../../Registration/js/Button";

export const MeetingBox = ({ handleData }) => {
  const handleDateClick = (date) => {
    console.log("Date clicked:", date);
    // Add your custom logic here
  };

  const [meetingDate, setMeetingDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [purpose, setPurpose] = useState("");
  const [recurrence, setRecurrence] = useState("None");
  const [notification, setNotification] = useState("30 minutes before");
  const [participants, setParticipants] = useState("");
  const [location, setLocation] = useState("");

  const recurrenceOptions = ["None", "Daily", "Weekly", "Monthly"];
  const notificationOptions = [
    "5 minutes before",
    "10 minutes before",
    "30 minutes before",
    "1 hour before",
  ];

  const handleShcedule = () => {};

  return (
    <div className={styles.meetingBox}>
      <div className={styles.meeting}>
        <div className={styles.titleCalenderTime}>
          <div className={styles.title}>
            <InputField
              label="Title"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required={true}
            />
          </div>
          <div className={styles.calenderTime}>
            <div className={styles.calender}>
              <Calendar handleDateClick={setMeetingDate} />
            </div>
            <div className={styles.time}>
              <InputTime label={"Start Time"} onTimeChange={setStartTime} />
              <InputTime label={"End Time"} onTimeChange={setEndTime} />
            </div>
          </div>
        </div>

        <div className={styles.titleCalenderTime}>
          <div className={styles.title}>
            <InputField
              label="Purpose"
              type="text"
              name="purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              required={true}
            />
          </div>

          <InputField
            label="Location"
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required={true}
          />
          <div className={styles.notiRecur}>
            <div>
              <p className={styles.lable}>Recurrence</p>
              <CustomDropdown
                options={recurrenceOptions}
                onChange={setRecurrence}
                value={recurrence}
                specialStyle={{ width: "100px" }}
              />
            </div>
            <div>
              <p className={styles.lable}>Notification</p>
              <CustomDropdown
                options={notificationOptions}
                onChange={setNotification}
                value={notification}
              />
            </div>
          </div>
          <div className={styles.Participate}>Add Participant</div>
          <div className={styles.btnContainer}>
            <Button
              text={"Schedule"}
              onClick={handleShcedule}
              style={{ width: "150px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
