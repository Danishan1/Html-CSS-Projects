import React from "react";
import style from "../css/WhereWeServe.module.css";
import serveData from "../../../../../data/DataWeServe";
import CardTextSliding from "../../../../util/jsx/Cards/CardTextSliding";

const WhereWeServe = () => {
  return (
    <>
      <div className={style.whereWeServe}>
        <p className={style.p1}>Where Do We Serve</p>
        <div className={style.serveContainer}>
          {serveData.map((value, index) => {
            const list = value.spaces.join(", ");
            return (
              <CardTextSliding
                key={index} // Added key for each card
                imgPath={value.image} // Use the correct property for image path
                productName={value.category}
                desc={list}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WhereWeServe;
