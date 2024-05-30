// Code:

import React from "react";
import style from "../css/CategoryContainer.module.css";
import NameCode from "./NameCode";

const CategoryContainer = ({ title, list}) => {
  return (
    <>
      <div className={style.categoryContainer}>
        <p  className={style.headName}>{title}</p>
        <div className={style.p1}>
          {list.map((value) => (
            <NameCode key={value.code} code={value.code} name={value.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryContainer;
