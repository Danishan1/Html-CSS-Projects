import React from "react";
import style from "../css/MidLayout.module.css";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Career from "./Career";
import Gallery from "./Gallery";
import Helpdesk from "./Helpdesk";
import Quotation from "./Quotation";
import Services from "./Services";
import LoginSignup from "./LoginSignup";

const MidLayout = ({ selectedTab }) => {
  let content;

  switch (selectedTab) {
    case "home":
      content = <Home />;
      break;
    case "aboutus":
      content = <AboutUs />;
      break;
    case "career":
      content = <Career />;
      break;
    case "gallery":
      content = <Gallery />;
      break;
    case "helpdesk":
      content = <Helpdesk />;
      break;
    case "quotation":
      content = <Quotation />;
      break;
    case "services":
      content = <Services />;
      break;
    case "loginsignup":
      content = <LoginSignup />;
      break;
    default:
      content = <Home />;
  }

  return (
    <>
      <div className={style.midlayout}>{content}</div>
    </>
  );
};

export default MidLayout;
