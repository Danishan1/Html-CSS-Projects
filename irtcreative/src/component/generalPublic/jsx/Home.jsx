import React from "react";
import style from "../css/Home.module.css";
import ImageGrid3x3 from "../helper/home/jsx/ImageGrid";
import backgroundImage from "../../../images/img3.jpg";

const Home = () => {
  return (
    <>
      <div className={style.home}>
        <ImageGrid3x3
          size={300}
          backgroundImage={backgroundImage}
          grids={7}
          color={"--colorRed"}
        />
      </div>
    </>
  );
};

export default Home;
