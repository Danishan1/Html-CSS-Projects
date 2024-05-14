import React from "react";
import style from "../css/Home.module.css";
import ImageGrid3x3 from "../helper/home/jsx/ImageGrid";
import Introduction from "../helper/home/jsx/Introduction";
import backgroundImage from "../../../images/img3.jpg";
import backgroundImage1 from "../../../images/sofa01.jpg";

const Home = () => {
  // let list4Color = [0, 1, 2, 3, 6, 9, 10, 11, 13, 14, 16, 17, 23, 25, 35];
  let list4Color = [];
  return (
    <>
      <div className={style.home}>
        {/* <ImageGrid3x3
          size={700}
          backgroundImage={backgroundImage1}
          grids={8}
          color={"--colorWhite"}
          value={list4Color}
          border={false}
          showCellNo={false}
        /> */}
        <Introduction />
      </div>
    </>
  );
};

export default Home;
