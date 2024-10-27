import React, { useEffect, useState } from "react";
import styles from "../css/CardDrawn.module.css";
import { deck } from "../helper/cards";
import { WaitingScreen } from "./WaitingScreen";
import Card from "./Card";

const shuffleDeck = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const CardDrawn = ({ isShow }) => {
  const [currentWindow, setCurrentWindow] = useState(0);
  const [shuffledDeck, setShuffledDeck] = useState([]);
  const [waitingTime, setWaitingTime] = useState(3);

  useEffect(() => {
    const timeDurations = [3, 3, 4];

    const showNextWindow = (index) => {
      if (index < timeDurations.length) {
        setCurrentWindow(index);

        if (index === 2) {
          setShuffledDeck(shuffleDeck(deck));
        }

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
    let timer;
    if (currentWindow === 1 && waitingTime > 0) {
      timer = setInterval(() => {
        setWaitingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (waitingTime === 0) {
      setCurrentWindow(2);
    }

    return () => clearInterval(timer);
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
          text={`We are currently shuffling the cards.`}
          timer={waitingTime}
        />
      )}

      {currentWindow === 2 && (
        <div className={styles.showDeckCards}>
          {shuffledDeck.map((code) => (
            <div key={code} className={styles.cardWrapper}>
              <Card code={code} setResult={() => {}} isShow={isShow} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
