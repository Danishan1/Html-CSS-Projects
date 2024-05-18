// Code: ABAB017
import React from "react";
import Style from "../css/Introduction.module.css";
import Logo from "../../../../util/jsx/Logo";
import useLogoWidth from "../../../../../hooks/useLogoWidth";

const Introduction = () => {
  // Set the Wifth of the Logo based on Device Width
  const logoWidth = useLogoWidth();

  return (
    <div className={Style.introduction}>
      {/* Container of having logo and msg */}
      <div className={Style.welcomeLogo}>
        <p className={Style.welcome}>Welcome to </p>

        <div className={Style.logoBack}>
          <Logo width={logoWidth} className={Style.logo} />
        </div>

        <p className={Style.sentance}>
          At itsRIGHTtime Creative, we believe in the transformative power of
          design. Your space is not just a place, it's a reflection of who you
          are. With our expertise and your unique style, together, we can bring
          your vision to life.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
