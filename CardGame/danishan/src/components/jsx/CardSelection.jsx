import React, { useEffect, useState } from "react";
import styles from "../css/DeckCards.module.css";
import Card from "./Card";
import { WaitingScreen } from "./WaitingScreen";

export const CardSelection = ({
  deck,
  onCardClick,
  isShow,
  activePlayer,
  timer,
}) => {
  const [waitingScreen, setWaitingScreen] = useState(false);

  useEffect(() => {
    if (timer == 0) setWaitingScreen(false);
  }, [timer, setWaitingScreen]);

  if (!activePlayer)
    return (
      <div className={styles.singleCard}>
        <p className={styles.playerText}>Select a Player</p>
      </div>
    );

  if (waitingScreen) {
    return (
      <div className={styles.cardSelection}>
        <WaitingScreen
          text={"Congratulations!! You have successfully Selected card."}
          timer={timer}
        />
      </div>
    );
  }

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
                    setResult={() => {
                      onCardClick(code);
                      setWaitingScreen(true);
                    }}
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
