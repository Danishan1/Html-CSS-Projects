// Code:

import React from "react";
import style from "../css/MainService.module.css";
import OnLoadScreen from "./onLoadScreen";
import ServicePage from "./ServicePage";
import img1 from "../../../../../images/img2.jpg";
import MainShowContainer from "./MainShowContainer";
import getDivDep from "./DataExtrector/getDivDep";
// import getServiceData from "./getServiceData";

const MainService = ({ tab }) => {
  //   const { sectorColNames, sectorData } = getServiceData("Sectors");

  let content,
    data = [];
  switch (tab) {
    case "hom":
      content = <OnLoadScreen />;
      break;
    case "ser":
      content = (
        <ServicePage
          serviceCode={"NAB0D"}
          ServiceName={"Interior Designing"}
          DeptCode={"NA"}
          DeptName={"Interior Design"}
          SectCode={"NAB"}
          SectName={"Design"}
          DiviCode={"N"}
          DiviName={"Design & Planning"}
          imgPath={img1}
        />
      );
      break;
    case "all":
      content = <MainShowContainer data={data} />;
      break;
    case "dep":
      data = getDivDep();
      content = <MainShowContainer data={data} />;
      break;
    case "div":
      content = <MainShowContainer data={data} />;
      break;
    case "sec":
      content = <MainShowContainer data={data} />;
      break;
    default:
      content = <OnLoadScreen />;
      break;
  }

  return (
    <>
      <div className={style.mainService}>{content}</div>
    </>
  );
};

export default MainService;
