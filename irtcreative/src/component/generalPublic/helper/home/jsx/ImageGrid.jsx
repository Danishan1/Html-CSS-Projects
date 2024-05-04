// Code: ABAB012

import React from "react";
import style from "../css/ImageGrid.module.css";
import resolveImageGridID from "../../ResolveImageGridID";

const ImageGrid = ({
  size, // Size of the Container
  backgroundImage,
  value, // which column, row, cell, or all should bs colored
  grids = 3, // No of Grids (i.e : grid=3 implies 3x3)
  color = "--colorWhite", // Color that need to put on the Image
  border = false, // Border should be present or not
  showCellNo = false,
}) => {
  // Main Grid Dynamic Styling
  const gridContainerStyle = {
    width: size,
    height: size,
    gridTemplateColumns: `repeat(${grids}, 1fr)` /* 3 columns */,
    gridTemplateRows: `repeat(${grids}, 1fr)` /* 3 rows */,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
  };

  // Styling for cell color
  const selectedCell = {
    backgroundColor: `var(${color})`,
  };

  // Setting border to match the cell Color
  const setBorder = {
    border: `1px solid var(${color})`,
  };

  // The Function gives the list of cell that need to be color
  let boxList = resolveImageGridID(value, grids);
  const gridItems = [];
  let boxListIndex = 0;

  // The Loop is responsible for making boxes fro the grid and applying appropreate style based on cell requirement
  for (let i = 0; i < grids * grids; i++) {
    // This condition is responsible for making the box colored to hide the image information
    if (i === boxList[boxListIndex]) {
      boxListIndex++;

      if (border === true)
        // Dynamically change the border visiblity
        // After Applying appropreate Style & classes, putting the box into list for making dynamic Rendering
        gridItems.push(
          <div
            key={i}
            className={`${style.box} ${style.selectedCell}`}
            style={{ ...selectedCell, ...setBorder }}
          >
            {showCellNo === true ? i : ""}
          </div>
        );
      // Worked When boder is set to false : making sure border not to visible
      else
        gridItems.push(
          <div
            key={i}
            className={`${style.box} ${style.selectedCell}`}
            style={selectedCell}
          >
            {showCellNo === true ? i : ""}
          </div>
        );
      //
      // This condition is responsible for making the image information visible rest all doing work as above
    } else {
      if (border === true)
        gridItems.push(
          <div key={i} className={style.box} style={setBorder}>
            {showCellNo === true ? i : ""}
          </div>
        );
      else
        gridItems.push(
          <div key={i} className={style.box}>
            {showCellNo === true ? i : ""}
          </div>
        );
    }
  }

  return (
    <>
      {/* We have all the Required no. of Boxes to put as a grid creation in grodItem List */}
      <div className={style.imageGrid} style={gridContainerStyle}>
        {gridItems}
      </div>
    </>
  );
};

export default ImageGrid;
