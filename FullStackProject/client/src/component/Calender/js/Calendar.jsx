import React, { useState } from "react";
import styles from "../css/CalendarBox.module.css";
import { left, right } from "../helper/Icons";
import { renderCalendar } from "../helper/renderCalender";
import {
  handleNextMonth,
  handlePrevMonthRestrict,
} from "../helper/handleMonths";

export const Calendar = ({ handleData }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDateClick = (date) => {
    console.log("Date clicked:", date);
    // Add your custom logic here
  };

  return (
    <div className={styles.calendarBox}>
      <div className={styles.calendarHeader}>
        <div
          className={styles.iconBtn}
          onClick={() => handlePrevMonthRestrict(currentDate, setCurrentDate)}
        >
          {left}
        </div>

        <h2>{`${currentDate.toLocaleString("default", {
          month: "long",
        })} ${currentDate.getFullYear()}`}</h2>

        <div
          className={styles.iconBtn}
          onClick={() => handleNextMonth(currentDate, setCurrentDate)}
        >
          {right}
        </div>
      </div>

      <div className={styles.calendarBody}>
        <div className={styles.calendarDays}>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className={styles.calendarDates}>
          {renderCalendar(currentDate, handleDateClick)}
        </div>
      </div>
    </div>
  );
};
