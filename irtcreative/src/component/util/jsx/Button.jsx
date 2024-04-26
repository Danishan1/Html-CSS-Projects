import React from "react";
import style from "../css/Button.module.css";

// To achieve the Multi Colored Buttons
export const btnColorCss = (btnColor) => {
  return btnColor === "blue"
    ? "bgColorBlue"
    : btnColor === "red"
    ? "bgColorRed"
    : btnColor === "yellow"
    ? "bgColorYellow"
    : btnColor === "cyan"
    ? "bgColorCyan"
    : btnColor === "green"
    ? "bgColorGreen"
    : btnColor === "gray"
    ? "bgColorGray5"
    : "";
};

// To achieve the Multi Colored Buttons on hover
const btnHoverColorCss = (btnColor) => {
  return btnColor === "blue"
    ? "btnHoverBlue"
    : btnColor === "red"
    ? "btnHoverRed"
    : btnColor === "yellow"
    ? "btnHoverYellow"
    : btnColor === "cyan"
    ? "btnHoverCyan"
    : btnColor === "green"
    ? "btnHoverGreen"
    : btnColor === "gray"
    ? "btnHoverGray5"
    : "";
};

// /////////////////////////////////////////////////////////////////////////////
// Code: ABAB003
export const Button = ({
  text,
  link = "#",
  target = "_blank",
  color = "blue",
}) => {
  const btnColor = btnColorCss(color);
  const btnHoverColor = btnHoverColorCss(color);

  return (
    <>
      <div className={`${style.btn} ${btnColor} ${style[btnHoverColor]}`}>
        <a href={link} target={target} className={style.link}>
          {text}
        </a>{" "}
      </div>
    </>
  );
};

// /////////////////////////////////////////////////////////////////////////////
// Code : ABAB004
export const ButtonL = ({
  text,
  link = "#",
  target = "_blank",
  color = "blue",
}) => {
  const btnColor = btnColorCss(color);
  const btnHoverColor = btnHoverColorCss(color);

  const btnL = `${style.btn} ${style.btnL} ${btnColor} ${style[btnHoverColor]}`;

  return (
    <>
      <div className={btnL}>
        <a href={link} target={target} className={style.link}>
          {text}
        </a>{" "}
      </div>
    </>
  );
};

// /////////////////////////////////////////////////////////////////////////////
// Code : ABAB005
export const ButtonLL = ({
  text,
  link = "#",
  target = "_blank",
  color = "blue",
}) => {
  const btnColor = btnColorCss(color);
  const btnHoverColor = btnHoverColorCss(color);

  const btnL = `${style.btn} ${style.btnLL} ${btnColor} ${style[btnHoverColor]}`;
  return (
    <>
      <div className={btnL}>
        <a href={link} target={target} className={style.link}>
          {text}
        </a>{" "}
      </div>
    </>
  );
};

// /////////////////////////////////////////////////////////////////////////////
// Code : ABAB006
export const ButtonS = ({
  text,
  link = "#",
  target = "_blank",
  color = "blue",
}) => {
  const btnColor = btnColorCss(color);
  const btnHoverColor = btnHoverColorCss(color);

  const btnL = `${style.btn} ${style.btnS} ${btnColor} ${style[btnHoverColor]}`;
  return (
    <>
      <div className={btnL}>
        <a href={link} target={target} className={style.link}>
          {text}
        </a>{" "}
      </div>
    </>
  );
};

export default Button;
