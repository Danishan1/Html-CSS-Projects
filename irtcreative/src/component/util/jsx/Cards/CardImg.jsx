import React from "react";
import style from "../../css/Cards/CardImg.module.css";

// Code: ABAB007
const CardImg = ({
  imgPath,
  title,
  desc,
  link = "#",
  targetLink = "_blank",
}) => {
  return (
    <>
      <article>
        <div class={style.articleWrapper}>
          <figure>
            <img src={imgPath} alt="" />
          </figure>
          <div class={style.articleBody}>
            <h2>{title}</h2>
            <p>{desc} </p> <br />
            <a href={link} target={targetLink} class={style.readMore}>
              Read more
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default CardImg;
