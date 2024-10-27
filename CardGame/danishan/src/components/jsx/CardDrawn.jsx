import React, { useEffect, useState } from "react";
import styles from "../css/CardDrawn.module.css";
import { WaitingScreen } from "./WaitingScreen";
import Card from "./Card";
import { deck } from "../helper/cards";

export const CardDrawn = ({ isShow, selectedCards, remainingDeck }) => {
  const [currentWindow, setCurrentWindow] = useState(0);
  const [waitingTime, setWaitingTime] = useState(8);

  useEffect(() => {
    const timeDurations = [8, 4, 8];

    const showNextWindow = (index) => {
      if (index < timeDurations.length) {
        setCurrentWindow(index);
        setWaitingTime(timeDurations[index]);
        setTimeout(
          () => showNextWindow(index + 1),
          timeDurations[index] * 1000
        );
      }
    };

    showNextWindow(0);
  }, []);

  useEffect(() => {
    if (currentWindow === 1 && waitingTime > 0) {
      const timer = setInterval(() => {
        setWaitingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentWindow, waitingTime]);

  return (
    <div className={styles.cardDrawn}>
      {currentWindow === 0 && (
        <div className={styles.showDeckCards}>
          {deck.map((code) => (
            <div key={code} className={styles.cardWrapper}>
              <Card code={code} setResult={() => {}} isShow={isShow} />
            </div>
          ))}
        </div>
      )}

      {currentWindow === 1 && (
        <WaitingScreen
          text="We are currently shuffling the cards and randomly picking one"
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
                  <Card
                    code={code}
                    setResult={() => {}}
                    isShow={index === 0 ? false : true}
                  />
                  <p>{index === 0 ? "Flag Card" : "Deciding Card"}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
