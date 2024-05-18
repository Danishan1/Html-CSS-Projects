import React from "react";
import style from "../css/Home.module.css";
import Introduction from "../helper/home/jsx/Introduction";
import TagLine from "../helper/home/jsx/TagLine";


const Home = () => {
  
  return (
    <>
      <div className={style.home}>
        <Introduction />
        <TagLine/>
      </div>
    </>
  );
};

export default Home;
