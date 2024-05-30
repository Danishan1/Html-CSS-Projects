// Code:

import React from "react";
import style from "../css/NameCode.module.css";

const NameCode = ({ code, name, getOnClick }) => {
  return (
    <>
      <div className={style.nameCode}>
        {/* <p className={style.p1}>
          Code : <span className={style.code}>{code}</span>
        </p> */}
        {/* <p className={style.p1}>
          Name : <span className={style.name}>{name}</span>
        </p> */}
        <p className={style.p1}>
          <span className={style.name}>{name}</span>
        </p>
      </div>
    </>
  );
};

export default NameCode;
