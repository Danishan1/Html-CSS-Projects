import React, { useState, useEffect } from "react";
import styles from "../css/CardGame.module.css";
import CardSelection from "./CardSelection";
import BidStake from "./BidStake";
import { deckSuits } from "../helper/cards";
import { Button } from "./Button";

export const CardGame = ({ setBid }) => {
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
    setShowCard(false);
  };

  return (
    <div className={styles.cardGame}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <Button text={"Admin"} onlick={() => {}} />
        </div>
        <div className={styles.rightHeader}>
          {screenStage === 0 && (
            <Button
              text={screenStage === 0 ? "Show Cards" : "Hide Cards"}
              onlick={() => setShowCard((prev) => !prev)}
            />
          )}
          <div className={styles.timer}>
            Timer <div className={styles.timeLeft}>{timer}s</div>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        {screenStage === 0 ? (
          <CardSelection
            deck={deckSuits}
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
