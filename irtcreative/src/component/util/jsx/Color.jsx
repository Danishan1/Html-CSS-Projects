
// Code: ABAB00B
export const bgColor = (color) => {
  return color === "blue"
    ? "bgColorBlue"
    : color === "red"
    ? "bgColorRed"
    : color === "yellow"
    ? "bgColorYellow"
    : color === "cyan"
    ? "bgColorCyan"
    : color === "green"
    ? "bgColorGreen"
    : color === "gray"
    ? "bgColorGray5"
    : "";
};


// Code: ABAB00C
export const textColor = (color) => {
  return color === "blue"
    ? "colorBlue"
    : color === "red"
    ? "colorRed"
    : color === "yellow"
    ? "colorYellow"
    : color === "cyan"
    ? "colorCyan"
    : color === "green"
    ? "colorGreen"
    : color === "gray"
    ? "colorGray5"
    : "";
};

// Code: ABAB00D
export const hoverColor = (color) => {
  return color === "blue"
    ? "colorBlueHover"
    : color === "red"
    ? "colorRedHover"
    : color === "yellow"
    ? "colorYellowHover"
    : color === "cyan"
    ? "colorCyanHover"
    : color === "green"
    ? "colorGreenHover"
    : color === "gray"
    ? "colorGray5"
    : "";
};
