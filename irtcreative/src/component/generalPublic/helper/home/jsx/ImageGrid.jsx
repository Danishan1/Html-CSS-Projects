import React from "react";
import style from "../css/ImageGrid.module.css";
import resolveImageGridID from "../../ResolveImageGridID";

const ImageGrid = ({
  size, // Size of the Container
  backgroundImage,
  grids = 3, // No of Grids (i.e : grid=3 implies 3x3)
  value = [5, 7, "8", "R1", "C4", "R4"], // which column, row, cell, or all should bs colored
  color = "--colorWhite", // Color that need to put on the Image
  border = "N", // Border should be present or not
  showCellNo = false,
}) => {
  const gridContainerStyle = {
    width: size,
    height: size,
    gridTemplateColumns: `repeat(${grids}, 1fr)` /* 3 columns */,
    gridTemplateRows: `repeat(${grids}, 1fr)` /* 3 rows */,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
  };

  const selectedCell = {
    backgroundColor: `var(${color})`,
  };

  const setBorder = {
    border: `1px solid var(${color})`,
  };

  let boxList = resolveImageGridID(value, grids);
  const gridItems = [];
  let boxListIndex = 0;

  for (let i = 0; i < grids * grids; i++) {
    if (i === boxList[boxListIndex]) {
      boxListIndex++;

      if (border === "Y")
        gridItems.push(
          <div
            key={i}
            className={`${style.box} ${style.selectedCell}`}
            style={{ ...selectedCell, ...setBorder }}
          >
            {showCellNo === true ? i : ""}
          </div>
        );
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
    } else {
      if (border === "Y")
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
      <div className={style.imageGrid} style={gridContainerStyle}>
        {gridItems}
      </div>
    </>
  );
};

export default ImageGrid;
