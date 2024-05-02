import React, { useEffect, useState } from "react";
import style from "../css/header.module.css";
import logo from "../src/irt name logo.png";
import CorssIcon from "../src/crossIcon";
import LinesIcon from "../src/linesIcon";

const Header = ({}) => {
  // When Navigation is in Mobile Version: Show & hide the Tabs depending on Buttons (Cross & Lines)
  const [isNavOpen, setIsNavOpen] = useState(false);

  // When Navigation is in large Device Mode: Make sure that their will no effect of buttons
  const [isNavOpenOnSize, setIsNavOpenOnSize] = useState(
    window.innerWidth > 690 ? true : false
  );

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const openNav = () => {
    setIsNavOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      setIsNavOpenOnSize(() => (window.innerWidth > 690 ? true : false));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isNavOpen && window.innerWidth < 690) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
  }, [isNavOpen]);

  return (
    <>
      <div className={style.navShowHide}>
        {!isNavOpen && (
          <LinesIcon
            className={`${style.show} ${isNavOpen ? "open" : ""}`}
            onClick={openNav}
          />
        )}
        {isNavOpen && <CorssIcon className={style.hide} onClick={closeNav} />}
      </div>
      {(isNavOpen || isNavOpenOnSize) && (
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
