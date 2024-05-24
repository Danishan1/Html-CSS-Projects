import React from "react";
import style from "../css/Services.module.css";
import getServiceData from "../helper/services/jsx/getServiceData";

const Services = () => {
  const { columnNames, data } = getServiceData("Services");
  return (
    <>
      <div className={style.services}>
        <div className={style.leftSide}>
          <div className={style.filter1}></div>
          <div className={style.filter2}></div>
        </div>
        <div className={style.midSide}>
          <div className={style.filter3}></div>
          <div className={style.mainService}>
            
          </div>
        </div>
      </div>
      <div className={style.tutorial}>Tutorials</div>
    </>
  );
};

export default Services;
