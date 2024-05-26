// Code: ABAB01F

import React from "react";

const Line = ({ color = "--colorGray3", width = "100%", props }) => {
  const myStyle = {
    width: `${width}`, // Add desired width
    height: "2px", // Add desired height
    backgroundColor: `var(${color})`, // Use CSS variable for color
  };

  return (
    <>
      <div style={myStyle} {...props}></div>
    </>
  );
};

export default Line;
