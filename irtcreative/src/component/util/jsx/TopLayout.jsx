import React from "react";
import style from "../css/TopLayout.module.css";

const TopLayout = ({
  header,
  footer = null,
  leftLayout = null,
  rightLayout = null,
  midLayout,
}) => {
  return (
    <div className={style.mainLayout}>
      <div className={style.headerLayout}>{header}</div>

      <div className={style.contentLayout}>
        {leftLayout == null ? null : (
          <div className={style.leftLayout}>{leftLayout}</div>
        )}
        <div className={style.midLayout}>{midLayout}</div>
        {rightLayout == null ? null : (
          <div className={style.rightLayout}>{rightLayout}</div>
        )}
      </div>
      {footer == null ? null : (
        <div className={style.footerLayout}>{footer}</div>
      )}
    </div>
  );
};

export default TopLayout;
