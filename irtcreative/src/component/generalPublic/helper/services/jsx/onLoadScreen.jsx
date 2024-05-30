// Code: ABAB023

import React from "react";
import style from "../css/onLoadScreen.module.css";
import ServiceIntro from "./ServiceIntro";
import OurStructureApproch from "./OurStructureApproch";
import Line from "../../../../util/jsx/Line";
import WhereWeServe from "./whereWeServe";

const OnLoadScreen = () => {
  return (
    <>
      <div className={style.onLoadScreen}>
        <ServiceIntro />
        <Line />
        <OurStructureApproch />
        <br />
        <Line />
        <WhereWeServe />
      </div>
    </>
  );
};

export default OnLoadScreen;
