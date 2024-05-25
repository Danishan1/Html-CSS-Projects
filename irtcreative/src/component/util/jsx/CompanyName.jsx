// Code: ABAB01E

import React from "react";
import style from "../css/LogoWritten.module.css";

const CompanyName = ({size='1em'}) => {
  return (
    <>
      <span className={style.LogoWriten} >
        <span style={{fontSize:size}} className={style.gray}>its</span>
        <span style={{fontSize:size}} className={style.color}>RIGHT</span>
        <span style={{fontSize:size}} className={style.gray}>time - </span>
        <span style={{fontSize:size}} className={style.color}>CREATIVE</span>
      </span>
    </>
  );
};

export default CompanyName;
