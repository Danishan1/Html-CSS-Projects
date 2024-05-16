import React from "react";
import Style from "../css/Introduction.module.css";
import Logo from "../../../../util/jsx/Logo";

const Introduction = () => {
  return (
    <>
      <div className={Style.introduction}>
        <div className={Style.welcomeLogo}>
          <p className={Style.welcome}>Welcome to </p>
          <Logo width={400} className={Style.logo} />
        </div>
      </div>
    </>
  );
};

export default Introduction;
