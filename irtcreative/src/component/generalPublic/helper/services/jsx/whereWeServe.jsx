// Code:

import React from "react";
import style from "../css/WhereWeServe.module.css";
import serveData from "../../../../../data/whereDoWeServe.json"

const WhereWeServe = () => {
  return (
    <>
      <div className={style.whereWeServe}>
        <p className={style.p1}>Where Do We Serve</p>
      <div className={style.serveContainer}> </div>
      </div>
    </>
  );
};

export default WhereWeServe;
