// Code:

import React from "react";
import style from "../css/NameCode.module.css";


const propName = (code) => {
  if (code.length === 1) return "Division";
  else if (code.length === 2) return "Department";
  else if (code.length === 3) return "Sector";
  else return "Service";
};

const NameCode = ({ code, name}) => {
  const propname = propName(code)

  return (
    <>
      <div className={style.nameCode}>
        <p className={style.p1}>
          <span className={style.key}>{propname} Code : </span>
          <span className={style.code}>{code}</span>
        </p>
        <p className={style.p1}>
          <span className={style.key}>{propname} Name : </span>
          <span className={style.code}>{name}</span>
        </p>
      </div>
    </>
  );
};

export default NameCode;
