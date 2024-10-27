import React from "react";
import styles from "../css/WaitingScreen.module.css";

export const WaitingScreen = ({ text, timer }) => {
  return (
    <div className={styles.waitingScreen}>
      <p className={styles.text}>{text} You will move to next stage in </p>
      <p className={styles.timer}>{timer}</p>
    </div>
  );
};
