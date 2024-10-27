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
  const [timer, setTimer] = useState(10);
  const [screenStage, setScreenStage] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [profile, setProfile] = useState("player");
  const [playerDropdown, setPlayerDropdown] = useState(false);
  const [activePlayer, setActivePlayer] = useState(null);
  const [playerOutput, setPlayerOutput] = useState(null);

  const [shuffledDeck] = useState(shuffleDeck(deck));
  const [selectedCards, setSelectedCards] = useState([]);
  const [remainingDeck, setRemainingDeck] = useState(shuffledDeck);

  const onTimeout = () => {
    if (screenStage === 0) setScreenStage(1);
    else if (screenStage === 1) setScreenStage(2);
    else
      resetSelection(
        setSelectedCard,
        setScreenStage,
        setTimer,
        setShowCard,
        setPlayerOutput
      );
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
        {profile === "admin" ? (
          <Admin
            playerOutput={playerOutput}
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
            remainingDeck={remainingDeck}
            setRemainingDeck={setRemainingDeck}
          />
        ) : (
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
          />
        )}
      </div>
    </div>
  );
};

export default CardGame;
