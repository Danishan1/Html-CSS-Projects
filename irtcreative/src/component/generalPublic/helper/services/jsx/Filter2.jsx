// Code:

import React from "react";
import style from "../css/Filter2.module.css";
import Tab from "./Tab";
import getDataByPage from "./DataExtrector/getDataByPage";

const Filter2 = ({ onTabClick }) => {
  const { columnNames: sectorColNames, data: sectorData } =
    getDataByPage("Sectors");
  return (
    <>
      <div className={style.name}>Sectors</div>
      <div className={style.filter2}>
        {sectorData.map((item, index) => (
          <Tab
            key={index}
            tabName={item[sectorColNames[2]]}
            code={item[sectorColNames[1]]}
            onClick={onTabClick}
          />
        ))}
      </div>
    </>
  );
};

export default Filter2;
