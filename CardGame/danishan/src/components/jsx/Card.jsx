import React from "react";
import styles from "../css/Card.module.css";
import gameImage from "../../assets/images/game.png";
import {
  clubIcon,
  diamondIcon,
  heartIcon,
  spadeIcon,
} from "../../assets/js/icons";

const Card = ({ code = "HJ", setResult }) => {
  const suitName = code[0];
  const cardName = code.slice(1);

  let cardIcon;

  switch (suitName) {
    case "H":
      cardIcon = heartIcon;
      break;
    case "S":
      cardIcon = spadeIcon;
      break;
    case "C":
      cardIcon = clubIcon;
      break;
    case "D":
      cardIcon = diamondIcon;
      break;
    default:
      cardIcon = null;
  }

  const cssVariable = {
    "--suitColor":
      suitName === "H" || suitName === "D"
        ? "var(--colorRed)"
        : "var(--colorGray6)",
  };

  return (
    <div
      className={styles.cardContainer}
      style={cssVariable}
      onClick={() => setResult(code)}
    >
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <div className={styles.content}>
            <p>{cardName}</p>
            <p>{cardIcon}</p>
          </div>
        </div>
        <div className={styles.cardBack}>
          <img src={gameImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
