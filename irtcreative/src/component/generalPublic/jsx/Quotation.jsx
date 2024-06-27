import React from "react";
import style from "../css/Quotation.module.css";
import CommingSoon from "./CommingSoon";

const Quotation = () => {
  return (
    <>
      <div className={style.quotation}>
      <CommingSoon
          text={
            "I am currently developing the 'Quotation' Layout feature. This update will be released shortly."
          }
        />
      </div>
    </>
  );
};

export default Quotation;
