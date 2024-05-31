// Code:

import React from "react";
import style from "../css/NameCode.module.css";

const NameCode = ({ code, name, setClickedValue }) => {
  return (
    <>
      <div className={style.nameCode} onClick={() => setClickedValue(code)}>
        <p className={style.p1}>
          <span className={style.name}>{name}</span>
        </p>
      </div>
    </>
  );
};

export default NameCode;
