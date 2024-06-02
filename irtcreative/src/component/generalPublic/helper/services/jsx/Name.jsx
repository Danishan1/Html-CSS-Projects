// Code:

import React from "react";
import style from "../css/Name.module.css";

const Name = ({ code, name, setClickedValue }) => {
  return (
    <>
      <div className={style.name} onClick={() => setClickedValue(code)}>
        <p className={style.p1}>
          <span className={style.name}>{name}</span>
        </p>
      </div>
    </>
  );
};

export default Name;
