import React, { useEffect } from "react";
import CardSelection from "./CardSelection";
import BidStake from "./BidStake";
import { handleBidding, resetSelection } from "../helper/GameLogic";

export const PlayGame = ({
  activePlayer,
  timer,
  setTimer,
  screenStage,
  setScreenStage,
  selectedCard,
  setSelectedCard,
  playerOutput,
  setPlayerOutput,
  setShowCard,
  showCard,
}) => {
  useEffect(() => {
    if (timer <= 0) {
      if (screenStage === 0) {
        setScreenStage(1);
        setTimer(10);
      } else {
        resetSelection(setSelectedCard, setScreenStage, setTimer, setShowCard);
      }
    }
  }, [
    timer,
    screenStage,
    setScreenStage,
    setTimer,
    setSelectedCard,
    setShowCard,
  ]);

  return screenStage === 0 ? (
    <CardSelection
      onCardClick={(card) => {
        setSelectedCard(card);
      }}
      isShow={showCard}
      activePlayer={activePlayer}
      timer={timer}
      playerOutput={playerOutput}
    />
  ) : (
    <BidStake
      activePlayer={activePlayer}
      playerOutput={playerOutput}
      timer={timer}
      setTimer={setTimer}
      setBid={(bidAmount) =>
        handleBidding(bidAmount, setPlayerOutput, activePlayer, selectedCard)
      }
      resetSelection={() =>
        resetSelection(setSelectedCard, setScreenStage, setTimer, setShowCard)
      }
    />
  );
};
