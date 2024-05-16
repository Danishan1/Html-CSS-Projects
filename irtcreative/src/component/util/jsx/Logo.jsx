// Code: ABAB014

import React from "react";
import Style from "../css/Logo.module.css";
import logoName from "../src/irtCre LogoName.png";
import nameH from "../src/irtCre NameH.png";
import nameV from "../src/irtCre NameV.png";

const Logo = ({ width, type = 0, ...props }) => {
  return (
    <>
      {type === 0 ? (
        <div
          className={Style.container}
          {...props}
          style={{ width: `${width}px` }}
        >
          <img src={nameH} className={Style.logo} alt="itsRIGHTtime CREATIVE" />
        </div>
      ) : type === 1 ? (
        <div
          className={Style.container}
          {...props}
          style={{ width: `${width}px` }}
        >
          <img src={nameV} alt="itsRIGHTtime CREATIVE" className={Style.logo} />
        </div>
      ) : (
        <div
          className={Style.container}
          {...props}
          style={{ width: `${width}px` }}
        >
          <img src={logoName} alt="Logo" className={Style.logo} />
        </div>
      )}
    </>
  );
};

export default Logo;
