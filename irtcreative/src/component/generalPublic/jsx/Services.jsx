import React from "react";
import style from "../css/Services.module.css";
import { ButtonL } from "../../util/jsx/Button";

const Services = () => {
  return (
    <>
      <div className={style.services}>
        <div className={style.leftSide}>
          <div className={style.filter1}></div>
          <div className={style.filter2}></div>
        </div>
        <div className={style.midSide}>
          <div className={style.filter3}></div>
          <div className={style.mainService}></div>
        </div>
      </div>
      <div className={style.tutorial}>Tutorial</div>
      <ButtonL className={style.tutorial}/>
    </>
  );
};

export default Services;
