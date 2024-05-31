// Code: ABAB01B

import React, { useEffect, useState } from "react";
import style from "../css/Filter1.module.css";
import Tab from "./Tab";
import SearchBox from "./Search";
import getSearchedData from "./DataExtrector/getSearchData";

const Filter1 = ({ onTabClick, onSearchClick }) => {
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

  const data4Search = getSearchedData();

  const tabs = [
    "Home",
    "All Services",
    "Divisions",
    "Departments",
    "Sectors",
    "Units",
  ];

  

  return (
    <>
      <div className={style.filterContainer}>
        <div className={style.name}>Filter</div>
        <div className={style.searchBox}>
          <SearchBox suggestions={data4Search} tab={onSearchClick} />
        </div>
        {winWidth < 690 && <div className={style.filterBtn}>Filter</div>}
        <div className={style.filter1}>
          {tabs.map((tabName) => (
            <Tab
              key={tabName}
              tabName={tabName}
              onClick={() => onTabClick(tabName)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Filter1;
