// Code: 

import React from "react";
import style from "../css/AllSectors.module.css";
import getServiceData from "./getServiceData";

const AllSectors = () => {
  const data = getServiceData("Mapped");
  console.log(data)
  return (
    <>
      <div className={style.allSectors}>
      <p className={style.p1}>All Sectors</p>
       
      </div>
    </>
  );
};

export default AllSectors;
