import React from "react";
import style from "../css/MainShowContainer.module.css";
import CategoryContainer from "./CategoryContainer";

const MainShowContainer = ({ data }) => {
  return (
    <>
      <div className={style.mainShowContainer}>
        {Object.entries(data).map(([key, value]) => (
          <CategoryContainer key={key} title={key} list={value} />
        ))}
      </div>
    </>
  );
};

export default MainShowContainer;
