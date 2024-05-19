import React from "react";
import style from "../css/Section3.module.css";
import CardImg from "../../../../util/jsx/Cards/CardImg";
import CardSimpleInfo from "../../../../util/jsx/Cards/CardSimpleInfo";
import CardTextOn from "../../../../util/jsx/Cards/CardTextOn";
import CardTextSliding from "../../../../util/jsx/Cards/CardTextSliding";
import img from "../src/item10.jpg";

const Section3 = () => {
  const desc = "My Name is Danishan. You are my Favourate Person";

  return (
    <>
      <div className={style.section3}>
        {/* <CardImg imgPath={img} title={"Danishan"} desc={desc} />
        <CardSimpleInfo
          imgPath={img}
          name={"Salman"}
          title={"Danishan"}
          desc={desc}
          borderCol="red"
        />
        <CardTextOn
          authorName={"Danishan"}
          date={"16-06-2000"}
          imgPath={img}
          desc={desc}
        /> */}

        <CardTextSliding
          imgPath={img}
          productName={"Danishan"}
          productID={"12015486"}
          desc={desc}
          color="blue"
        />
      </div>
    </>
  );
};

export default Section3;
