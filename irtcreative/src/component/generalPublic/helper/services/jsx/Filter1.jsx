// Code: ABAB01B

import React, { useEffect, useState } from "react";
import style from "../css/Filter1.module.css";
import Tab from "./Tab";
import SearchBox from "./Search";
import getServiceData from "./getServiceData";

const preparingDataforSearchBox = () => {
  const { columnNames: deptColNames, data: deptData } =
    getServiceData("Departments");
  const { columnNames: sectorColNames, data: sectorData } =
    getServiceData("Sectors");
  const { columnNames: divisionColNames, data: divisionData } =
    getServiceData("Divisions");
  const { columnNames: serviceColNames, data: serviceData } =
    getServiceData("Services");

  // Combine all data into a single list
  const searchData = [
    ...deptData.map((item) => item[deptColNames[2]]),
    ...sectorData.map((item) => item[sectorColNames[2]]),
    ...divisionData.map((item) => item[divisionColNames[2]]),
    ...serviceData.map((item) => item[serviceColNames[2]]),
  ];

  // Filter out any undefined values
  return searchData.filter(Boolean);
};

const Filter1 = () => {
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data4Search = preparingDataforSearchBox();
  return (
    <>
      <div className={style.filterContainer}>
        <div className={style.name}>Filter</div>
        <div className={style.searchBox}>
          <SearchBox suggestions={data4Search} />
        </div>
        {winWidth < 690 && <div className={style.filterBtn}>Filter</div>}
        <div className={style.filter1}>
          <Tab tabName={"Home"} link={"#"} />
          <Tab tabName={"All Services"} link={"#"} />
          <Tab tabName={"Divisions"} link={"#"} />
          <Tab tabName={"Departments"} link={"#"} />
          <Tab tabName={"Sectors"} link={"#"} />
          <Tab tabName={"Units"} link={"#"} />
        </div>
      </div>
    </>
  );
};

export default Filter1;
