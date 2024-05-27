// Code: ABAB028

import React from "react";
import style from "../css/ServicePage.module.css";

const ServicePage = ({
  serviceCode,
  ServiceName,
  DeptCode,
  DeptName,
  SectCode,
  SectName,
  DiviCode,
  DiviName,
  imgPath,
}) => {
  const styleComp = {
    backgroundImage: `url(${imgPath})`,
  };

  return (
    <>
      <div className={style.servicePage} style={styleComp}>
        <div className={style.infoBox}>
          <p className={style.p1}>
            {serviceCode} : {ServiceName}
          </p>
          <p className={style.p2}>
            {DiviCode} : {DiviName}
          </p>
          <p className={style.p3}>
            {DeptCode} : {DeptName}
          </p>
          <p className={style.p4}>
            {SectCode} : {SectName}
          </p>
          <div className={style.tutorial}>Get an Expert View</div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
