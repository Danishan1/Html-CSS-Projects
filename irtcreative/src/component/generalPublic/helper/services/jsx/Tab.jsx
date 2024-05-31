// Code: ABAB022

import React from "react";
import style from "../css/Tab.module.css";

const Tab = ({ tabName, code, onClick }) => {
  return (
    <>
      <div className={style.tab} onClick={() => onClick(code)}>
        {tabName}
      </div>
    </>
  );
};

export default Tab;
