import React from "react";
import style from "../css/Filter1.module.css";
import Tab from "./Tab";
import SearchBox from "./Search";

const Filter1 = () => {
  return (
    <>
      <div className={style.filter1}>
        <div className={style.name}>Filter</div>
        <SearchBox />
        <Tab tabName={"Tab"} link={"#"} />
        <Tab tabName={"Divisions"} link={"#"} />
        <Tab tabName={"Departments"} link={"#"} />
        <Tab tabName={"Sectors"} link={"#"} />
        <Tab tabName={"Units"} link={"#"} />
        <Tab tabName={"Tab"} link={"#"} />
      </div>
    </>
  );
};

export default Filter1;
