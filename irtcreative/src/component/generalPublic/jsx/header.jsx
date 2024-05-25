// Code: ABAB011

import React, { useEffect, useState } from "react";
import style from "../css/Header.module.css";
import CorssIcon from "../src/crossIcon";
import LinesIcon from "../src/linesIcon";
import Logo from "../../util/jsx/Logo";

// Exportabl Component
const Header = ({ onTabChange }) => {
  // Mobile Version : Make sure to open & close the nav properly
  const [isNavOpen, setIsNavOpen] = useState(true);

  // To track on which tab you are working on
  const [activeTab, setActiveTab] = useState(() => {
    // Save current tab location in local Storage so that on refresh we get the same tab
    const storedTab = localStorage.getItem("activeTab");
    return storedTab ? storedTab : "home";
  });

  // Make Proper Arrangement on Click of the tab
  const handleTabClick = (tab) => {
    onTabChange(tab);
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab); // Store active tab ID in localStorage
    window.innerWidth < 690 && setIsNavOpen(false)
  };

  // Track the width of the current Window and set it true or false
  useEffect(() => {
    const handleResize = () => {
      setIsNavOpen(() => window.innerWidth > 690);
    };

    window.addEventListener("resize", handleResize);

    // Clean up or removing event Listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mobile Version : when Nav annel is open then Schrooling should be turned off else on
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
  }, [isNavOpen]);

  // Styling the Navigation buttons
  const getButtonStyle = (tab) => {
    return {
      color: activeTab === tab ? "var(--colorRed)" : "var(--colorSimple)",
      fontWeight: activeTab === tab ? "var(--boldL3)" : "var(--bold)",
    };
  };

  return (
    <>
      <div className={style.navShowHide}>
        {!isNavOpen ? (
          <LinesIcon
            className={`${style.show} ${isNavOpen ? "open" : ""}`}
            onClick={() => setIsNavOpen(true)}
          />
        ) : (
          <CorssIcon
            className={style.hide}
            onClick={() => setIsNavOpen(false)}
          />
        )}
      </div>

      {isNavOpen && (
        <div className={style.headerContainer}>
          <Logo width={220} type={2}/>
          <div className={`${style.tabs}`}>
            <div className={`${style.tabs1}`}>
              <div
                className={style.tab}
                style={getButtonStyle("home")}
                onClick={() => {
                  handleTabClick("home");
                }}
              >
                Home
              </div>

              <div
                className={style.tab}
                style={getButtonStyle("services")}
                onClick={() => {
                  handleTabClick("services");
                }}
              >
                Services
              </div>

              <div
                className={style.tab}
                style={getButtonStyle("gallery")}
                onClick={() => {
                  handleTabClick("gallery");
                }}
              >
                Gallery
              </div>

              <div
                className={style.tab}
                style={getButtonStyle("quotation")}
                onClick={() => {
                  handleTabClick("quotation");
                }}
              >
                Quotation
              </div>
            </div>
            <div className={`${style.tabs2}`}>
              <div
                className={style.tab}
                style={getButtonStyle("aboutus")}
                onClick={() => {
                  handleTabClick("aboutus");
                }}
              >
                About Us
              </div>

              <div
                className={style.tab}
                style={getButtonStyle("career")}
                onClick={() => {
                  handleTabClick("career");
                }}
              >
                Career
              </div>

              <div
                className={style.tab}
                style={getButtonStyle("helpdesk")}
                onClick={() => {
                  handleTabClick("helpdesk");
                }}
              >
                Helpdesk
              </div>

              <div
                className={style.tab}
                style={getButtonStyle("loginsignup")}
                onClick={() => {
                  handleTabClick("loginsignup");
                }}
              >
                Login/Signup
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
