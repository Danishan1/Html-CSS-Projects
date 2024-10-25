import React from "react";
import styles from "../css/DeckCards.module.css";
import Card from "./Card";

export const CardSelection = ({ deck, onCardClick, isShow, activePlayer }) => {
  if (!activePlayer)
    return (
      <div className={styles.singleCard}>
        <p className={styles.playerText}>Select a Player</p>
      </div>
    );

  return (
    <>
      <div className={styles.cardSelection}>
        <p className={styles.playerText}>{`Player-${activePlayer || 0}`}</p>
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
      </div>
    </>
  );
};

export default CardSelection;
