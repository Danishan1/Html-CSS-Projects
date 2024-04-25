import React from "react";
import style from "../../css/Cards/CardTextSliding.module.css";
import { ButtonL } from "../Button";

const CardTextSliding = ({
  imgPath,
  ProductName,
  catagory,
  desc,
  btnLink = "#",
  producID,
}) => {
  const cardContentCss = `${style.cardContent} | ${style.flow}`;
  const cardContentContainerCss = `${style.cardContentContainer} | ${style.flow}`;
  return (
    <>
      <article className={style.card}>
        <img
          className={style.cardBackground}
          src={imgPath}
          alt=""
          width="1920"
          height="2193"
        />
        <div className={cardContentCss}>
          <div className={cardContentContainerCss}>
            <h2 className={style.cardTitle}>Colombia</h2>
            <p className={style.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
              labore laudantium deserunt fugiat numquam.
            </p>
          </div>
          <ButtonL className={style.cardButton} text={"Get Expert View"} link={btnLink} target="_self" />
          <button className={style.cardButton}>Read more</button>
        </div>
      </article>
    </>
  );
};

export default CardTextSliding;
