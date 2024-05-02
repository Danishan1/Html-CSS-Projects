import React, { useState } from "react";
import style from "../css/header.module.css";
import logo from "../src/irt name logo.png";
import CorssIcon from "../src/crossIcon";
import LinesIcon from "../src/linesIcon";

const Header = ({}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const openNav = () => {
    setIsNavOpen(true);
  };

  return (
    <>
      <div className={style.headerContainer}>
        <div className={style.logo}>
          <img src={logo} alt="itsRIGHTtime" />
        </div>
        <div className={`${style.tabs} boldL1`}>
          <div className={`${style.tabs1}`}>
            <div className={`${style.homeTab} ${style.tab}`}>Home</div>
            <div className={`${style.ourServiceTab} ${style.tab}`}>
              Our Services
            </div>
            <div className={`${style.Gallery} ${style.tab}`}>Gallery </div>
            <div className={`${style.QuotationTab} ${style.tab}`}>
              Quotation
            </div>
          </div>
          <div className={`${style.tabs2}`}>
            <div className={`${style.AboutUsTab} ${style.tab}`}>About Us</div>
            <div className={`${style.CareerTab} ${style.tab}`}>Career</div>
            <div className={`${style.helpDeskTab} ${style.tab}`}>Helpdesk</div>
            <div className={`${style.loginTab} ${style.tab}`}>Login/Signup</div>
          </div>
        </div>
      </div>
      <div className={style.navShowHide}>
        {!isNavOpen && <LinesIcon className={`${style.show} ${isNavOpen ? 'open' : ''}`} onClick={openNav} />}
        {isNavOpen && <CorssIcon className={style.hide} onClick={closeNav} />}
      </div>
    </>
  );
};

export default Header;
