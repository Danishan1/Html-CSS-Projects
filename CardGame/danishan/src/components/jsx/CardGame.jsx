import React, { useEffect, useState } from "react";
import styles from "../css/CardGame.module.css";
import { PlayGame } from "./PlayGame";
import { Admin } from "./Admin";
import { Header } from "./Header";
import { playerCode } from "../helper/players";
import { resetSelection } from "../helper/GameLogic";
import { shuffleDeck } from "../helper/shuffleDeck";
import { deck } from "../helper/cards";

export const CardGame = () => {
  // const [timer, setTimer] = useState(10);
  const [timer, setTimer] = useState(2);
  const [screenStage, setScreenStage] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [profile, setProfile] = useState("player");
  const [playerDropdown, setPlayerDropdown] = useState(false);
  const [activePlayer, setActivePlayer] = useState(null);
  const [playerOutput, setPlayerOutput] = useState({});
  const [shuffledDeck] = useState(shuffleDeck(deck));
  const [selectedCards, setSelectedCards] = useState([]);
  const [winners, setWinners] = useState([]);
  const [remainingDeck, setRemainingDeck] = useState(shuffledDeck);

  const onTimeout = () => {
    if (screenStage === 0) setScreenStage(1);
    else if (screenStage === 1) setScreenStage(2);
    else if (screenStage === 2) setScreenStage(3);
    else {
      resetSelection(
        setSelectedCard,
        setScreenStage,
        setTimer,
        setShowCard,
        setPlayerOutput
      );
    }
  };

  useEffect(() => {
    if (activePlayer) {
      setPlayerOutput((prev) => {
        const activePlayerInfo = [`Player-${activePlayer}`];

        const temp = {
          ...prev,
          [activePlayerInfo]: {
            ...prev?.[activePlayerInfo],
            card: prev?.[activePlayerInfo]?.card || selectedCard,
          },
        };

        setSelectedCard(null);
        return temp;
      });
    }
  }, [activePlayer, selectedCard]);

  return (
    <div className={styles.cardGame}>
      <Header
        profile={profile}
        setProfile={setProfile}
        playerDropdown={playerDropdown}
        setPlayerDropdown={setPlayerDropdown}
        playerCode={playerCode}
        setActivePlayer={setActivePlayer}
        timer={timer}
        setTimer={setTimer}
        onTimeout={onTimeout}
        screenStage={screenStage}
        showCard={showCard}
        setShowCard={setShowCard}
        playerOutput={playerOutput}
        setPlayerOutput={setPlayerOutput}
      />

      <div className={styles.body}>
        <div
          className={`${styles.adminScreen} ${
            profile === "player" ? styles.hidden : ""
          }`}
        >
          <Admin
            playerOutput={playerOutput}
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
            remainingDeck={remainingDeck}
            setRemainingDeck={setRemainingDeck}
            screenStage={screenStage}
            setWinners={setWinners}
            winners={winners}
          />
        </div>

        <div
          className={`${styles.playGameScreen} ${
            profile === "admin" ? styles.hidden : ""
          }`}
        >
          <PlayGame
            activePlayer={activePlayer}
            timer={timer}
            setTimer={setTimer}
            screenStage={screenStage}
            setScreenStage={setScreenStage}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            playerOutput={playerOutput}
            setPlayerOutput={setPlayerOutput}
            setShowCard={setShowCard}
            showCard={showCard}
            selectedCards={selectedCards}
            remainingDeck={remainingDeck}
            shuffledDeck={shuffledDeck}
            winners={winners}
          />
        </div>
      </div>
    </div>
  );
};

export default CardGame;
