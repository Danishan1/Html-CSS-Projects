// Code: ABAB018

import { useState, useEffect } from "react";

const getLogoWidth = (width) => {
  if (width < 280) return 250;
  if (width < 365) return 300;
  if (width < 420) return 350;
  if (width < 640) return 400;
  if (width < 1000) return 600;
  return 800;
};

const useLogoWidth = () => {
  const [logoWidth, setLogoWidth] = useState(getLogoWidth(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setLogoWidth(getLogoWidth(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return logoWidth;
};

export default useLogoWidth;
