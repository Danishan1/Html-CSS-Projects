import React, { useEffect, useState } from "react";
import styles from "../css/CardDrawn.module.css";
import { WaitingScreen } from "./WaitingScreen";
import Card from "./Card";

export const CardDrawn = ({
  isShow,
  selectedCards,
  remainingDeck,
  shuffledDeck,
}) => {
  const [currentWindow, setCurrentWindow] = useState(0);
  const [waitingTime, setWaitingTime] = useState(3);

  console.log(selectedCards, remainingDeck, shuffledDeck);
  useEffect(() => {
    const timeDurations = [3, 3, 4, 4];
    const showNextWindow = (index) => {
      if (index < timeDurations.length) {
        setCurrentWindow(index);
        setTimeout(
          () => showNextWindow(index + 1),
          timeDurations[index] * 1000
        );
      }
    };

    showNextWindow(0);
    return () => clearTimeout();
  }, []);

  useEffect(() => {
    if (currentWindow === 1 && waitingTime > 0) {
      const timer = setInterval(() => {
        setWaitingTime((prevTime) => prevTime - 1);
      }, 1000);

      if (waitingTime === 0) {
        setCurrentWindow(2);
        clearInterval(timer);
      }

      return () => clearInterval(timer);
    }
  }, [currentWindow, waitingTime]);

  return (
    <div className={styles.cardDrawn}>
      {currentWindow === 0 && (
        <div className={styles.showDeckCards}>
          {shuffledDeck.map((code) => (
            <div key={code} className={styles.cardWrapper}>
              <Card code={code} setResult={() => {}} isShow={isShow} />
            </div>
          ))}
        </div>
      )}

      {currentWindow === 1 && (
        <WaitingScreen
          text="We are currently shuffling the cards."
          timer={waitingTime}
        />
      )}

      {currentWindow === 2 && (
        <div className={styles.cards}>
          <div className={styles.showDeckCards}>
            {remainingDeck.map((code) => (
              <div key={code} className={styles.cardWrapper}>
                <Card code={code} setResult={() => {}} isShow={isShow} />
              </div>
            ))}
          </div>
          <div className={`${styles.selectedCard}`}>
            {selectedCards.length > 0 &&
              selectedCards.map((code, index) => (
                <div key={code} className={styles.cardWrapper}>
                  <Card code={code} setResult={() => {}} isShow={isShow} />
                  <p>{index === 0 ? "Flag Card" : "Deciding Card"}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
