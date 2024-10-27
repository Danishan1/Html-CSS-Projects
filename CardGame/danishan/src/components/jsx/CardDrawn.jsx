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
  const [currentWindow, setCurrentWindow] = useState(0); // 0: unshuffled, 1: waiting, 2: shuffled, 3: selected cards
  const [shuffledDeck, setShuffledDeck] = useState([]);
  const [waitingTime, setWaitingTime] = useState(3);
  const [selectedCards, setSelectedCards] = useState([]); // Store the selected cards
  const [remainingDeck, setRemainingDeck] = useState([]); // Store the remaining deck after selections

  useEffect(() => {
    const timeDurations = [3, 3, 4, 4]; 
    const showNextWindow = (index) => {
      if (index < timeDurations.length) {
        setCurrentWindow(index);

        if (index === 2) {
          const shuffled = shuffleDeck(deck);
          setShuffledDeck(shuffled);
          setRemainingDeck(shuffled); 
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

  useEffect(() => {
    if (currentWindow === 2 && selectedCards.length < 2) {
      const pickCard = () => {
        if (remainingDeck.length > 0) {
          const randomIndex = Math.floor(Math.random() * remainingDeck.length);
          const selectedCard = remainingDeck[randomIndex];

          setSelectedCards((prev) => [...prev, selectedCard]);
          setRemainingDeck((prev) =>
            prev.filter((_, index) => index !== randomIndex)
          );
        }
      };

      pickCard();
    }
  }, [currentWindow, selectedCards, remainingDeck]);

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
        <div className={styles.cards}>
          <div className={styles.showDeckCards}>
            {shuffledDeck.map((code) => (
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
                <p>{index === 0 ? "Flag Card" : "Deciding Card" }</p>
                </div>
              ))}
            ;
          </div>
        </div>
      )}
    </div>
  );
};
