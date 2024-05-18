// Code: ABAB016

import React from "react";
import Style from "../css/TagLine.module.css";

// Import images
import item1 from "../src/item1.jpg";
import item2 from "../src/item2.jpg";
import item3 from "../src/item3.jpg";
import item4 from "../src/item4.jpg";
import item5 from "../src/item5.jpg";
import item6 from "../src/item6.jpg";
import item7 from "../src/item7.jpg";
import item8 from "../src/item8.jpg";
import item9 from "../src/item9.jpg";
import item10 from "../src/item10.jpg";
import item11 from "../src/item11.jpg";
import item12 from "../src/item12.jpg";

// Making List of images for dynamic Rendring
const images = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
];

const TagLine = () => {
  return (
    <div className={Style.container}>
      <div className={Style.gridContainer}>

        {/* Rendering Images Dynamically */}
        {images.map((item, index) => (
          <div
            key={index}
            className={`${Style.gridItem} ${Style["item" + (index + 1)]}`}
          >
            <img
              src={item}
              alt={`Item${index + 1}`}
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        ))}

        {/* Tag Line */}
        <div className={Style.tagLine}>
          <p>Your Space</p>
          <p>Your Style</p>
          <p>Our Expertise</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TagLine);
