// Code:

import React from "react";
import style from "../css/MainService.module.css";
import OnLoadScreen from "./onLoadScreen";
// import getServiceData from "./getServiceData";

const MainService = () => {
  //   const { sectorColNames, sectorData } = getServiceData("Sectors");
  return (
    <>
      <div className={style.mainService}>
        <OnLoadScreen />
      </div>
    </>
  );
};

export default MainService;
