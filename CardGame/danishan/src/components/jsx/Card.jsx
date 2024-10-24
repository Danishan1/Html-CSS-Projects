import React from "react";
import styles from "../css/Card.module.css";

const Card = ({ code }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardFront}>Front</div>
        <div className={styles.cardBack}>Back</div>
      </div>
    </div>
  );
};

export default Card;
