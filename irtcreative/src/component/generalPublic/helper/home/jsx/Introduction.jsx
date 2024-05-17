import React, { useState, useEffect } from "react";
import Style from "../css/Introduction.module.css";
import Logo from "../../../../util/jsx/Logo";

const Introduction = () => {
  const getLogoWidth = (width) => {
    if (width < 280) return 250;
    if (width < 365) return 300;
    if (width < 420) return 350;
    if (width < 640) return 400;
    if (width < 1000) return 600;
    return 800;
  };

  const [logoWidth, setLogoWidth] = useState(getLogoWidth(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setLogoWidth(getLogoWidth(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={Style.introduction}>
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
