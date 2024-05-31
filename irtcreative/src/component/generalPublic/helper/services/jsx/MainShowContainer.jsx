import React from "react";
import style from "../css/MainShowContainer.module.css";
import CategoryContainer from "./CategoryContainer";

const MainShowContainer = ({ data, title = "Title", setClickedValue}) => {
  return (
    <>
      <div className={style.mainShowContainer}>
        <p className={style.p1}>{title}</p>
        <div className={style.showContainer}>
          {Object.entries(data).map(([code, { name, list }]) => (
            <CategoryContainer key={code} title={name} list={list} setClickedValue={setClickedValue}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainShowContainer;
