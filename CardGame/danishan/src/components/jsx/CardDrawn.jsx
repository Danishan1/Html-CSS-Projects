import React from "react";
import styles from "../css/CardDrawn.module.css";

export const CardDrawn = ({ selectedCard }) => {
  if (selectedCard === null)
    return (
      <div className={styles.singleCard}>
        <p className={styles.text}>
          Bad Luck!!! You have not selected any card therefore you are out of
          the game.
        </p>
      </div>
    );

  return <div className={styles.cardDrawn}></div>;
};
