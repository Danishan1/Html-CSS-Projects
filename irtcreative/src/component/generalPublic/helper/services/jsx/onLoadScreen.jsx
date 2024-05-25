// Code:

import React from "react";
import style from "../css/onLoadScreen.module.css";
import LogoWritten from "../../../../util/jsx/LogoWritten";

const OnLoadScreen = () => {
  return (
    <>
      <div className={style.onLoadScreen}>
        <div className={style.serviceIntro}>
          <p className={style.p1}>Welcome to our Services page!</p>
          <div className={style.paragraph}>
            <p className={style.p2}>
              At <LogoWritten />, where quality meets passion, we're committed
              to delivering excellence every step of the way. It's our job to
              give you more than your imagination, ensuring that every project
              exceeds your expectations. Our services are organized into various
              categories, covering a wide range of needs and preferences. With
              over <span className="colorCyan boldL3">5</span> divisions,{" "}
              <span className="colorCyan boldL3">30+</span> departments,{" "}
              <span className="colorCyan boldL3">180+</span> specialized areas,
              and <span className="colorCyan boldL3">1000+</span> specific
              services, we offer a comprehensive solution for all your needs.
              Whether it's enhancing your home, optimizing your office, or
              transforming your hospitality space, we have the expertise and
              resources to bring your vision to life.
            </p>
            <p className={style.p3}>
              Explore our services and experience the difference of working with
              a team that prioritizes your satisfaction above all else!
            </p>
          </div>
        </div>




      </div>
    </>
  );
};

export default OnLoadScreen;
