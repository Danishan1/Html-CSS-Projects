// Code: ABAB014

import React from "react";
import Style from "../css/Logo.module.css";
import logoName from "../src/irtCre LogoName.png";
import nameH from "../src/irtCre NameH.png";
import nameV from "../src/irtCre NameV.png";

const Logo = ({ width, type = 0}) => {
  return (
    <>
      {type === 0 ? (
        <img
          src={nameH}
          className={Style.logo}
          alt="itsRIGHTtime CREATIVE"
          style={{ width: `${width}px` }}
        />
      ) : type === 1 ? (
        <img
          src={nameV}
          alt="itsRIGHTtime CREATIVE"
          className={Style.logo}
          style={{ width: `${width}px` }}
        />
      ) : (
        <img
          src={logoName}
          alt="Logo"
          className={Style.logo}
          style={{ width: `${width}px` }}
        />
      )}
    </>
  );
};

export default Logo;
