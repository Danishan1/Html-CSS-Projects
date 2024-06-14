import React, { useState } from "react";
import styles from "../css/CalendarBoxSmall.module.css";
import { leftS, rightS } from "../helper/Icons";
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
        {currentDate.getMonth() !== new Date().getMonth() ? (
          <div
            className={styles.iconBtn}
            onClick={() => handlePrevMonthRestrict(currentDate, setCurrentDate)}
          >
            {leftS}
          </div>
        ) : (
          <div></div>
        )}

        <h2>{`${currentDate
          .toLocaleString("default", {
            month: "long",
          })
          .substring(0, 3)} ${currentDate.getFullYear()}`}</h2>

        <div
          className={styles.iconBtn}
          onClick={() => handleNextMonth(currentDate, setCurrentDate)}
        >
          {rightS}
        </div>
      </div>

      <div className={styles.calendarBody}>
        <div className={styles.calendarDays}>
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className={styles.calendarDates}>
          {renderCalendar(currentDate, handleDateClick)}
        </div>
      </div>
    </div>
  );
};
