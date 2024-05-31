// Code:

import React from "react";
import style from "../css/MainService.module.css";
import OnLoadScreen from "./onLoadScreen";
import ServicePage from "./ServicePage";
import img1 from "../../../../../images/img2.jpg";
import MainShowContainer from "./MainShowContainer";
import getprocessedData from "./DataExtrector/getprocessedData";
// import getServiceData from "./getServiceData";

const MainService = ({ tab, clickCode }) => {
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
      data = getprocessedData("Sectors", "Services");
      content = (
        <MainShowContainer
          data={data}
          title="All of our services are organized according to sectors"
        />
      );
      break;
    case "dep":
      data = getprocessedData("Divisions", "Departments");
      content = (
        <MainShowContainer
          data={data}
          title="All of our Departments are organized according to Divisions"
        />
      );
      break;
    case "div":
      data = getprocessedData("Divisions", "Divisions");
      content = <MainShowContainer data={data} title="All of our Divisions" />;
      break;
    case "sec":
      data = getprocessedData("Departments", "Sectors");
      content = (
        <MainShowContainer
          data={data}
          title="All of our Sectors are organized according to Departments"
        />
      );
      break;
    default:
      content = <OnLoadScreen />;
      break;
  }

  const codeLen = clickCode.length;
  switch (codeLen) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 5:
      
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
  }

  return (
    <>
      <div className={style.mainService}>{content}</div>
    </>
  );
};

export default MainService;
