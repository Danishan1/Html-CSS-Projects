import React, { useState } from "react";
import styles from "../css/ShowDeckCards.module.css";
import Card from "./Card";

export const ShowDeckCards = () => {
  // Separate the deck into different suits
  const clubs = [
    "CA",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "C9",
    "C10",
    "CJ",
    "CQ",
    "CK",
  ];
  const hearts = [
    "HA",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "H7",
    "H8",
    "H9",
    "H10",
    "HJ",
    "HQ",
    "HK",
  ];
  const diamonds = [
    "DA",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "D8",
    "D9",
    "D10",
    "DJ",
    "DQ",
    "DK",
  ];
  const spades = [
    "SA",
    "S2",
    "S3",
    "S4",
    "S5",
    "S6",
    "S7",
    "S8",
    "S9",
    "S10",
    "SJ",
    "SQ",
    "SK",
  ];

  const deck = [clubs, diamonds, hearts, spades]; // 4 separate suit arrays

  const [selectedCard, setSelectedCard] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const handleCardClick = (code) => {
    if (!selectedCard) {
      setSelectedCard(code); // Lock the selected card
    }
  };

  return (
    <div className={styles.showDeckCards}>
      <div className={styles.header}>
        <button
          className={styles.btn}
          onClick={() => {
            setShowCard((pre) => !pre);
          }}
        >
          {showCard ? "Show Cards" : "Hide Cards"}
        </button>
      </div>
      <div className={styles.body}>
        {!selectedCard &&
          deck.map((suit, suitIndex) => (
            <div key={suitIndex} className={styles.suitColumn}>
              {suit.map((code) => (
                <div key={code} className={styles.cardWrapper}>
                  <Card
                    code={code}
                    setResult={() => handleCardClick(code)}
                    isShow={showCard}
                  />
                </div>
              ))}
            </div>
          ))}
        {selectedCard && (
          <div className={styles.singleCard}>
            <p>Okay!! Your selected card is</p>
            <Card code={selectedCard} setResult={() => {}} isShow={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowDeckCards;
