import React from "react";
import styles from "../css/Main.module.css";
import { Screen } from "./Screen";
import { Solution } from "./Solution";

export const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.calculator}>
        <p>Salman</p>
        <Screen />
        Main: <Solution/>
      </div>
    </div>
  );
};
