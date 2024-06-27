import React from "react";
import style from "../css/AboutUs.module.css";
import CommingSoon from "./CommingSoon";

const AboutUs = () => {
  return (
    <>
      <div className={style.aboutus}>
        <CommingSoon
          text={
            "I am currently developing the 'About Us' Layout feature. This update will be released shortly."
          }
        />
      </div>
    </>
  );
};

export default AboutUs;
