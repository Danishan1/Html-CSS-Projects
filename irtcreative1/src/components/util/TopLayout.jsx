import React from "react";
import style from "./TopLayout.module.css";

const YourComponent = () => {
  return (
    <>
      <div className={style.mainLayout }>
        <div className={style.headerLayout}>header-layout</div>

        {/* Main Content */}
        <div className={style.contentLayout}>
          <div className={style.leftLayout}>left-layout</div>
          <div className={style.midLayout}>mid-layout</div>
          <div className={style.rightLayout}>
         
          </div>
        </div>

        {/* Footer */}
        <div className={style.footerLayout}>Footer-layout</div>
      </div>
    </>
  );
};

export default YourComponent;
