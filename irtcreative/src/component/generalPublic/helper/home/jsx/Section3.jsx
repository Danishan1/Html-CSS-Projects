import React from "react";
import style from "../css/Section3.module.css";
import MySection from "./MySection";
import img1 from "../src/woodWork.jpg";
import img2 from "../src/creative.jpg";
import img3 from "../src/bulb1.jpg";

const Section3 = () => {
  const sections = [
    {
      img: img1,
      heading: "Crafting Experiences, One Design at a Time",
      desc: "Your space is our canvas, and your style is our inspiration. From the initial concept to the final finishing touches, we're dedicated to creating interiors that resonate with your personality and preferences. With our meticulous attention to detail and unwavering commitment to quality, we'll transform your space into a true reflection of your individuality.",
    },
    {
      img: img2,
      heading: "Unlock the Potential of Your Space",
      desc: "Whether it's a cozy home, a bustling office, or a charming restaurant, we understand that every space has its own story to tell. Our team of expert designers is here to listen, collaborate, and guide you through the design process, ensuring that your space not only looks beautiful but also functions seamlessly to meet your needs.",
    },
    {
      img: img3,
      heading: "Let's Create Something Extraordinary",
      desc: "Your space, your style, our expertise - together, let's create something extraordinary. From concept to completion, we're here to turn your dreams into reality. Discover the endless possibilities with itsRIGHTtime Creative and embark on a journey to transform your space into a masterpiece that reflects the true essence of who you are.",
    },
  ];

  return (
    <div className={style.section3}>
      {sections.map((section, index) => (
        <MySection
          key={index}
          img={section.img}
          heading={section.heading}
          desc={section.desc}
          textPosition={index}
        />
      ))}
    </div>
  );
};

export default Section3;
