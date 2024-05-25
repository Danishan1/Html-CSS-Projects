// Code:

import React from "react";
import style from "../css/onLoadScreen.module.css";
import IndiaMap from "./indiaMap";

const OnLoadScreen = () => {
  return (
    <>
      <div className={style.onLoadScreen}>
        <IndiaMap />
      </div>
    </>
  );
};

export default OnLoadScreen;
