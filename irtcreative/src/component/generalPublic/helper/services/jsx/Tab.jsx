// Code: ABAB022

import React from "react";
import style from "../css/Tab.module.css";

const Tab = ({ tabName, onClick }) => {
  return (
    <>
      <div className={style.tab} onClick={onClick}>
        {tabName}
      </div>
    </>
  );
};

export default Tab;
