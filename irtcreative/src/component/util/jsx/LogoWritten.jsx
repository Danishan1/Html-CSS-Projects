// Code: ABAB01E

import React from "react";
import style from "../css/LogoWritten.module.css";

const LogoWritten = ({size='1em'}) => {
  return (
    <>
      <div className={style.LogoWriten} >
        <span style={{fontSize:size}} className={style.gray}>its</span>
        <span style={{fontSize:size}} className={style.color}>RIGHT</span>
        <span style={{fontSize:size}} className={style.gray}>time - </span>
        <span style={{fontSize:size}} className={style.color}>CREATIVE</span>
      </div>
    </>
  );
};

export default LogoWritten;
