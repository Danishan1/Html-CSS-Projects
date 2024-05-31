import React, { useState } from "react";
import style from "../css/Services.module.css";
// import getServiceData from "../helper/services/jsx/getServiceData";
import Filter1 from "../helper/services/jsx/Filter1";
import Filter2 from "../helper/services/jsx/Filter2";
import MainService from "../helper/services/jsx/MainService";

const Services = () => {
  // const { columnNames, data } = getServiceData("Divisions");

  const [filterData, setFilterData] = useState("");
  const [searchID, setSearchID] = useState("");

  const handleTabClick = (tabName) => {
    setFilterData(tabName.substring(0, 3).toLowerCase());
    setSearchID("");
  };

  const handleSearchClick = (tab) => {
    setSearchID(tab);
    setFilterData("");
  };


  return (
    <>
      <div className={style.services}>
        <div className={style.leftSide}>
          <div className={style.filter1}>
            <Filter1
              onTabClick={handleTabClick}
              onSearchClick={handleSearchClick}
            />
          </div>
          <div className={style.filter2}>
            <Filter2 />
          </div>
        </div>
        <div className={style.midSide}>
          <div className={style.filter3}></div>
          <div className={style.mainService}>
            <MainService tab={filterData} clickCode={searchID} />
          </div>
        </div>
      </div>
      <div className={style.tutorial}>Tutorials</div>
    </>
  );
};

export default Services;
