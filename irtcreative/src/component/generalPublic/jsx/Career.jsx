import React from "react";
import style from "../css/Career.module.css";
import CommingSoon from "./CommingSoon";

const Career = () => {
  return (
    <>
      <div className={style.career}>
        
      <CommingSoon
          text={
            "I am currently developing the 'Career' Layout feature. This update will be released shortly."
          }
        />
      </div>
    </>
  );
};

export default Career;
