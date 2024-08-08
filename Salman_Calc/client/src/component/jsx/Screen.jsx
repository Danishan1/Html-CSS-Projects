import React from "react";
import styles from "../css/Screen.module.css";
import { Solution } from "./Solution";

export const Screen = () => {
  return <div className={styles.screen}> Screen : 
    <Solution/>
  
  </div>;
};
