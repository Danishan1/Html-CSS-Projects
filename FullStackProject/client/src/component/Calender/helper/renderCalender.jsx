import styles from "../css/CalendarBox.module.css";
export const renderCalendar = (date, handleDateClick) => {
  const calendarDates = [];
  const month = date.getMonth();
  const year = date.getFullYear();
  const today = new Date();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    calendarDates.push(
      <div key={`empty-${i}`} className={styles.emptyBox}></div>
    );
  }

  for (let i = 1; i <= lastDate; i++) {
    const cellDate = new Date(year, month, i);
    const isCurrentDate = cellDate.toDateString() === today.toDateString();
    const isBeforeCurrentDate = cellDate < today;
    const isAfterCurrentDate = cellDate > today;

    calendarDates.push(
      <div
        key={i}
        className={`${styles.contentBox} ${
          isCurrentDate ? styles.currentDate : ""
        } ${isBeforeCurrentDate ? styles.beforeCurDate : ""} ${
          isAfterCurrentDate ? styles.afterCurDate : ""
        }`}
        onClick={
          isAfterCurrentDate || isCurrentDate
            ? () => handleDateClick(cellDate)
            : undefined
        }
      >
        {i}
      </div>
    );
  }

  return calendarDates;
};
