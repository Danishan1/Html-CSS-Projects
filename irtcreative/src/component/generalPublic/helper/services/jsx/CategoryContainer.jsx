// Code:

import React from "react";
import style from "../css/CategoryContainer.module.css";
import Name from "./Name";

const CategoryContainer = ({ title, list, setClickedValue }) => {
  return (
    <>
      <div className={style.categoryContainer}>
        <p className={style.headName}>{title}</p>
        <div className={style.p1}>
          {list.map((value) => (
            <Name
              key={value.code}
              code={value.code}
              name={value.name}
              setClickedValue={setClickedValue}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryContainer;
