import React from "react";
import style from "../css/Home.module.css";
import Introduction from "../helper/home/jsx/Introduction";
import TagLine from "../helper/home/jsx/TagLine";
import Section3 from "../helper/home/jsx/Section3";

const Home = () => {
  return (
    <>
      <div className={style.home}>
        <Introduction />
        <TagLine />
        <Section3 />
      </div>
    </>
  );
};

export default Home;
