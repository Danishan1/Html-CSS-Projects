// Code:

import React from "react";
import style from "../css/CategoryContainer.module.css";
import NameCode from "./NameCode";

const CategoryContainer = ({ title, list = [] }) => {
  return (
    <>
      <div className={style.categoryContainer} key={title}>
        <p  className={style.headName}>{title}</p>
        <div className={style.p1}>
          {list.map((value) => (
            <NameCode key={value} code={"DCFS25"} name={value} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryContainer;
