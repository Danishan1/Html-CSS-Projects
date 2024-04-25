import React from "react";
import style from "../css/TopLayout.module.css";

const YourComponent = ({
  header,
  footer = null,
  leftLayout = null,
  rightLayout = null,
  midLayout,
}) => {
  return (
    <>
      <div className={style.mainLayout}>
        <div className={style.headerLayout}>{header}</div>

        {/* Main Content */}
        <div className={style.contentLayout}>
          {leftLayout == null ? (
            <></>
          ) : (
            <div className={style.leftLayout}>{leftLayout}</div>
          )}
          <div className={style.midLayout}>{midLayout}</div>

          {rightLayout == null ? (
            <></>
          ) : (
            <div className={style.rightLayout}>{rightLayout}</div>
          )}
        </div>

        {/* Footer */}
        {footer == null ? (
          <></>
        ) : (
          <div className={style.footerLayout}>{footer}</div>
        )}
      </div>
    </>
  );
};

export default YourComponent;
