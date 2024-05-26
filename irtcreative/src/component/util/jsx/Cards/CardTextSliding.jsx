// Code: ABAB009

import React from "react";
import style from "../../css/Cards/CardTextSliding.module.css";
import { ButtonL } from "../Button";

// For Updating Line background based on color value passed by the user
const titleLineCss = (color) => {
  return color === "blue"
    ? "bgLineBlue"
    : color === "red"
    ? "bgLineRed"
    : color === "yellow"
    ? "bgLineYellow"
    : color === "cyan"
    ? "bgLineCyan"
    : color === "green"
    ? "bgLineGreen"
    : color === "gray"
    ? "bgLineGray5"
    : "";
};

const CardTextSliding = ({
  imgPath,
  productName,
  desc,
  btnLink = "#",
  productID = null,
  color = "cyan",
  orientation = "S",
}) => {
  const cardContentCss = `${style.cardContent} | ${style.flow}`;
  const cardContentContainerCss = `${style.cardContentContainer} | ${style.flow}`;
  const bgColorCss = titleLineCss(color);
  const orientCss =
    orientation === "V"
      ? "vertical"
      : orientation === "H"
      ? "horizontal"
      : "square";
  return (
    <>
      <div className={`${style.mainBox} ${style[orientCss]}`}>
        {/* Main Card Continer */}
        <article className={style.card}>
          {/* Background Image */}
          <img
            className={style.cardBackground}
            src={imgPath}
            alt=""
            width="1920"
            height="2193"
          />

          {/* Content Section */}
          <div className={cardContentCss}>
            <div className={cardContentContainerCss}>
              <h2 className={`${style.cardTitle} ${style[bgColorCss]}`}>
                {productName}
              </h2>
              <p className={style.cardDescription}>{desc}</p>
            </div>
            <div className={style.cardButton}>
              <ButtonL
                text={"Get Expert View"}
                link={btnLink}
                target="_self"
                color={color}
              />
            </div>
          </div>
        </article>

        {/* For product ID */}
        {productID == null ? (
          <></>
        ) : (
          <div className={`${style.productID} textHeadSmall2`}>
            <p className="textHeadSmall2">~ Product ID: {productID}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CardTextSliding;
