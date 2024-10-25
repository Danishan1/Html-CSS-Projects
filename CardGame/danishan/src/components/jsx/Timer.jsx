import React, { useEffect } from "react";
import styles from "../css/CardGame.module.css";

export const Timer = ({ timer, setTimer, onTimeout }) => {
  useEffect(() => {
    if (timer <= 0) return;
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          onTimeout();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, setTimer, onTimeout]);

  return (
    <div className={styles.timer}>
      Timer <div className={styles.timeLeft}>{timer}s</div>
    </div>
  );
};
