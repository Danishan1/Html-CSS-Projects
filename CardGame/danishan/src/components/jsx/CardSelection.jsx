import React, { useEffect, useState } from "react";
import styles from "../css/DeckCards.module.css";
import Card from "./Card";
import { WaitingScreen } from "./WaitingScreen";
import { deckSuits, deck } from "../helper/cards";

export const CardSelection = ({
  onCardClick,
  isShow,
  activePlayer,
  timer,
  playerOutput,
}) => {
  const [waitingScreen, setWaitingScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 540);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 540);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (timer === 0) setWaitingScreen(false);
  }, [timer]);

  if (!activePlayer)
    return (
      <div className={styles.singleCard}>
        <p className={styles.playerText}>Select a Player to select the card.</p>
      </div>
    );

  const activePlayerInfo = playerOutput?.[`Player-${activePlayer}`];
  if (waitingScreen && activePlayerInfo && activePlayerInfo?.card) {
    return (
      <div className={styles.cardSelection}>
        <WaitingScreen
          text={"Congratulations!! You have successfully selected a card."}
          timer={timer}
        />
      </div>
    );
  }

  return (
    <div className={styles.cardSelection}>
      <p className={styles.playerText}>{`Player-${activePlayer || 0}`}</p>
      <div className={styles.showDeckCards}>
        {isSmallScreen ? (
          <div className={styles.suitColumn}>
            {deck.map((code) => (
              <div key={code} className={styles.cardWrapper}>
                <Card
                  code={code}
                  setResult={() => {
                    onCardClick(code);
                    setWaitingScreen(true);
                  }}
                  isShow={isShow}
                />
              </div>
            ))}
          </div>
        ) : (
          deckSuits.map((suit, suitIndex) => (
            <div key={suitIndex} className={styles.suitColumn}>
              {suit.map((code) => (
                <div key={code} className={styles.cardWrapper}>
                  <Card
                    code={code}
                    setResult={() => {
                      onCardClick(code);
                      setWaitingScreen(true);
                    }}
                    isShow={isShow}
                  />
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CardSelection;
