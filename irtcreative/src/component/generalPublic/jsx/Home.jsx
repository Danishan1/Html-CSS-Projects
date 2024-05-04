import React from "react";
import style from "../css/Home.module.css";
import ImageGrid3x3 from "../helper/home/jsx/ImageGrid";
import backgroundImage from "../../../images/img3.jpg";

const Home = () => {
  let list4Color = [0, 1, 2, 3, 6, 9, 10, 11, 13, 14, 16, 17, 23, 25, 35];
  return (
    <>
      <div className={style.home}>
        <ImageGrid3x3
          size={700}
          backgroundImage={backgroundImage}
          grids={12}
          color={"--colorWhite"}
          value={list4Color}
          border={false}
          showCellNo={true}
        />
      </div>
    </>
  );
};

export default Home;
