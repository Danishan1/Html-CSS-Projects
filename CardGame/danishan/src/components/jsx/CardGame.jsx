import React, { useState } from "react";
import styles from "../css/CardGame.module.css";
import CardSelection from "./CardSelection";
import BidStake from "./BidStake";
import { deckSuits } from "../helper/cards";
import { Admin } from "./Admin";
import { playerCode } from "../helper/players";
import { Header } from "./Header";
import {
  handleCardClick,
  resetSelection,
  handleBidding,
} from "../helper/GameLogic";

export const CardGame = () => {
  const [timer, setTimer] = useState(10);
  const [selectedCard, setSelectedCard] = useState(null);
  const [screenStage, setScreenStage] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [profile, setProfile] = useState("player");
  const [playerDropdown, setPlayerDropdown] = useState(false);
  const [activePlayer, setActivePlayer] = useState(null);
  const [playerOutput, setPlayerOutput] = useState(null);

  const onTimeout = () => {
    if (screenStage === 0) setScreenStage(1);
    else resetSelection(setSelectedCard, setScreenStage, setTimer, setShowCard);
  };

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
      />

      <div className={styles.body}>
        {profile === "admin" ? (
          <Admin playerOutput={playerOutput} />
        ) : screenStage === 0 ? (
          <CardSelection
            deck={deckSuits}
            onCardClick={(card) =>
              handleCardClick(card, setSelectedCard, setScreenStage, setTimer)
            }
            isShow={showCard}
            activePlayer={activePlayer}
          />
        ) : (
          <BidStake
            activePlayer={activePlayer}
            selectedCard={selectedCard}
            timer={timer}
            setTimer={setTimer}
            setBid={(bidAmount) =>
              handleBidding(
                bidAmount,
                setPlayerOutput,
                activePlayer,
                selectedCard
              )
            }
            resetSelection={() =>
              resetSelection(
                setSelectedCard,
                setScreenStage,
                setTimer,
                setShowCard
              )
            }
          />
        )}
      </div>
    </div>
  );
};

export default CardGame;
