// Code: ABAB00E

import { useState, useEffect } from "react";

const WindowDimensions = ({ onDimensionsChange }) => {
  const [, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      const newDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      setWindowDimensions(newDimensions);
      onDimensionsChange(newDimensions); // Pass dimensions to parent component
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onDimensionsChange]);

  // This component does not render anything directly
  return null;
};

export default WindowDimensions;

/***
import React, { useState } from 'react';
import WindowDimensions from './WindowDimensions';

const ParentComponent = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleDimensionsChange = (newDimensions) => {
    setDimensions(newDimensions);
  };

  return (
    <WindowDimensions onDimensionsChange={handleDimensionsChange} />
  )

*/
