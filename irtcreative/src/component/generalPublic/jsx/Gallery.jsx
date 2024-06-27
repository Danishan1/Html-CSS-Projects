import React from "react";
import style from "../css/Gallery.module.css";
import CommingSoon from "./CommingSoon";

const Gallery = () => {
  return (
    <>
      <div className={style.gallery}>
        <CommingSoon
          text={
            "I am currently developing the 'Gallery' Layout feature. This update will be released shortly."
          }
        />
      </div>
    </>
  );
};

export default Gallery;
