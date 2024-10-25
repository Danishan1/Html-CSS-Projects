import React, { useState, useEffect } from "react";
import styles from "../css/CardGame.module.css";
import CardSelection from "./CardSelection";
import BidStake from "./BidStake";
import { deckSuits, deck } from "../helper/cards";
import { Button } from "./Button";
import { Admin } from "./Admin";
import { playerCode } from "../helper/players";

export const CardGame = () => {
  const [timer, setTimer] = useState(10);
  const [selectedCard, setSelectedCard] = useState(null);
  const [screenStage, setScreenStage] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [profile, setProfile] = useState("player");
  const [playerDropdown, setPlayerDropdown] = useState(false);
  const [activePlayer, setActivePlayer] = useState(null);
  const [playerOutput, setPlayerOutput] = useState(null);

  useEffect(() => {
    const countdown = setInterval(() => {
      // setTimer((prev) => {
      //   if (prev === 1) {
      //     clearInterval(countdown);
      //     if (screenStage === 0) {
      //       setScreenStage(1);
      //     } else {
      //       resetSelection();
      //     }
      //     return 10;
      //   }
      //   return prev - 1;
      // });
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

  const handleBidding = (bidAmount) => {
    setPlayerOutput((prev) => {
      return {
        ...prev,
        [`Player-${activePlayer}`]: { card: selectedCard, bid: bidAmount },
      };
    });
  };

  return (
    <div className={styles.cardGame}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <Button
            text={"Admin"}
            onlick={() => {
              setProfile((prev) => (prev === "admin" ? "player" : "admin"));
            }}
          />
          <Button
            text={"Players"}
            onlick={() => {
              setPlayerDropdown((prev) => !prev);
            }}
          />
          {playerDropdown && (
            <div className={styles.playerDropdown}>
              {playerCode.map((player) => (
                <div
                  key={player}
                  className={styles.player}
                  onClick={() => {
                    setActivePlayer(player);
                    setPlayerDropdown(false);
                  }}
                >
                  {player}
                </div>
              ))}
            </div>
          )}
        </div>
        {profile !== "admin" && (
          <div className={styles.rightHeader}>
            {profile !== "admin" && screenStage === 0 && (
              <Button
                text={screenStage === 0 ? "Show Cards" : "Hide Cards"}
                onlick={() => setShowCard((prev) => !prev)}
              />
            )}
            <div className={styles.timer}>
              Timer <div className={styles.timeLeft}>{timer}s</div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.body}>
        {profile === "admin" ? (
          <Admin />
        ) : screenStage === 0 ? (
          <CardSelection
            deck={deckSuits}
            onCardClick={handleCardClick}
            isShow={showCard}
            activePlayer={activePlayer}
          />
        ) : (
          <BidStake
            activePlayer={activePlayer}
            selectedCard={selectedCard}
            timer={timer}
            setTimer={setTimer}
            setBid={(bidAmount) => {
              handleBidding(bidAmount);
            }}
            resetSelection={resetSelection}
          />
        )}
      </div>
    </div>
  );
};

export default CardGame;
