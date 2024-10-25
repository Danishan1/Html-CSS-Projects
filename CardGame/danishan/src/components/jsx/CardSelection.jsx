import React from "react";
import styles from "../css/DeckCards.module.css";
import Card from "./Card";

export const CardSelection = ({ deck, onCardClick, isShow }) => {
  return (
    <div className={styles.showDeckCards}>
      {deck.map((suit, suitIndex) => (
        <div key={suitIndex} className={styles.suitColumn}>
          {suit.map((code) => (
            <div key={code} className={styles.cardWrapper}>
              <Card
                code={code}
                setResult={() => onCardClick(code)}
                isShow={isShow}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardSelection;
