import React from "react";
import style from "../css/MySection.module.css";

const MySection = ({ img, heading, desc, textPosition }) => {
  const isEven = textPosition % 2 === 0;
  return (
    <>
      <div className={`${style.mySection} ${isEven ? style.even : style.odd}`}>
        <div className={style.headDesc}>
          <div className={style.heading}>{heading}</div>
          <div className={style.desc}>{desc}</div>
        </div>

        <div className={style.img}>
          <img src={img} alt={""} />
        </div>
      </div>
    </>
  );
};

export default MySection;
