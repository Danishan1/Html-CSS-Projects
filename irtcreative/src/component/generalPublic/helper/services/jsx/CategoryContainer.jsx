// Code: 

import React from "react";
import style from "../css/CategoryContainer.module.css";
import getServiceData from "./getServiceData";
import NameCode from "./NameCode";

const CategoryContainer = () => {
  const data = getServiceData("Mapped");
  console.log(data)
  return (
    <>
      <div className={style.categoryContainer}>
      <p className={style.p1}>
        <NameCode code={"DCFS25"} name={"Interior Design"}/>
        
      </p>
       
      </div>
    </>
  );
};

export default CategoryContainer;
