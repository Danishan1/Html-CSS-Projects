import React from "react";
import style from "../css/ImageGrid.module.css";

const ImageGrid = ({
  size, // Size of the Container
  backgroundImage,
  grids = 3, // No of Grids (i.e : grid=3 implies 3x3)
  value = [0, ], // which column, row, cell, or all should bs colored
  color = "white", // Color that need to put on the Image
  border = "N", // Border should be present or not
}) => {
  const gridContainerStyle = {
    gridTemplateColumns: `repeat(${grids}, 1fr)` /* 3 columns */,
    gridTemplateRows: `repeat(${grids}, 1fr)` /* 3 rows */,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
  };

  const gridItems = [];
  for (let i = 1; i <= grids * grids; i++) {
    gridItems.push(<div key={i} className={style.box}>{i}</div>);
  }

  return (
    <>
      <div className={style.imageGrid} style={gridContainerStyle}>
        {gridItems}
      </div>
    </>
  );
};

export default ImageGrid;
