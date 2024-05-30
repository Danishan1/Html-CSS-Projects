// Code:

import React from "react";
import style from "../css/MainService.module.css";
import OnLoadScreen from "./onLoadScreen";
import ServicePage from "./ServicePage";
import img1 from "../../../../../images/img2.jpg";
import CategoryContainer from "./CategoryContainer";
// import getServiceData from "./getServiceData";

const MainService = ({ tab }) => {
  //   const { sectorColNames, sectorData } = getServiceData("Sectors");

  let content;
  switch (tab) {
    case "home":
      content = <OnLoadScreen />;
      break;
    case "service":
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
    case "container":
      content = <CategoryContainer />;
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
