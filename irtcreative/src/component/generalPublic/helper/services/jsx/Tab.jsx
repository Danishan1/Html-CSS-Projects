import React from "react";
import style from "../css/Tab.module.css";

const Tab = ({ tabName, link }) => {
  return (
    <>
      <div className={style.tab}>
        <a href={link}>{tabName}</a>
      </div>
    </>
  );
};

export default Tab;
