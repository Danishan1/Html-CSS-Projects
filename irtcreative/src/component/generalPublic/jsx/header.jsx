import React, { useEffect, useState } from "react";
import style from "../css/header.module.css";
import logo from "../src/irt name logo.png";
import CorssIcon from "../src/crossIcon";
import LinesIcon from "../src/linesIcon";

const Header = ({}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const openNav = () => {
    setIsNavOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsNavOpen(() => window.innerWidth > 690);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
  }, [isNavOpen]);

  return (
    <>
      <div className={style.navShowHide}>
        {!isNavOpen ? (
          <LinesIcon
            className={`${style.show} ${isNavOpen ? "open" : ""}`}
            onClick={openNav}
          />
        ) : (
          <CorssIcon className={style.hide} onClick={closeNav} />
        )}
      </div>
      {isNavOpen && (
        <div className={style.headerContainer}>
          <div className={style.logo}>
            <img src={logo} alt="itsRIGHTtime" />
          </div>
          <div className={`${style.tabs} boldL1`}>
            <div className={`${style.tabs1}`}>
              <div className={`${style.homeTab} ${style.tab}`}>
                <a href=""> Home</a>
              </div>
              <div className={`${style.ourServiceTab} ${style.tab}`}>
                <a href=""> Our Services </a>
              </div>
              <div className={`${style.Gallery} ${style.tab}`}>
                <a href=""> Gallery</a>
              </div>
              <div className={`${style.QuotationTab} ${style.tab}`}>
                <a href=""> Quotation</a>
              </div>
            </div>
            <div className={`${style.tabs2}`}>
              <div className={`${style.AboutUsTab} ${style.tab}`}>
                <a href=""> About Us</a>
              </div>
              <div className={`${style.CareerTab} ${style.tab}`}>
                <a href=""> Career</a>
              </div>
              <div className={`${style.helpDeskTab} ${style.tab}`}>
                <a href=""> Helpdesk</a>
              </div>
              <div className={`${style.loginTab} ${style.tab}`}>
                <a href=""> Login/Signup </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
