import React from "react";
import Style from "../css/Introduction.module.css";
import Logo from "../../../../util/jsx/Logo";

const Introduction = () => {
  return (
    <>
      <div className={Style.introduction}>
        <Logo width={400} type={2} />
      </div>
    </>
  );
};

export default Introduction;
