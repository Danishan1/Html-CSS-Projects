import React, { useState, useEffect } from "react";
import styles from "../css/CardGame.module.css";
import CardSelection from "./CardSelection";
import BidStake from "./BidStake";

export const CardGame = ({ setBid }) => {
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
  const deck = [clubs, diamonds, hearts, spades];

  const [timer, setTimer] = useState(10);
  const [selectedCard, setSelectedCard] = useState(null);
  const [screenStage, setScreenStage] = useState(0);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          if (screenStage === 0) {
            setScreenStage(1);
          } else {
            resetSelection();
          }
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [screenStage, selectedCard]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setScreenStage(1);
    setTimer(10);
  };

  const resetSelection = () => {
    setSelectedCard(null);
    setScreenStage(0);
    setTimer(10);
  };

  return (
    <div className={styles.cardGame}>
      <div className={styles.header}>
        {screenStage === 0 && (
          <button
            className={styles.btn}
            onClick={() => setShowCard((prev) => !prev)}
          >
            {screenStage === 0 ? "Show Cards" : "Hide Cards"}
          </button>
        )}
        <div className={styles.timer}>
          Timer <div className={styles.timeLeft}>{timer}s</div>
        </div>
      </div>
      <div className={styles.body}>
        {screenStage === 0 ? (
          <CardSelection
            deck={deck}
            onCardClick={handleCardClick}
            isShow={showCard}
          />
        ) : (
          <BidStake
            selectedCard={selectedCard}
            timer={timer}
            setBid={setBid}
            resetSelection={resetSelection}
          />
        )}
      </div>
    </div>
  );
};

export default CardGame;
