import React, { useEffect } from "react";
import CardSelection from "./CardSelection";
import BidStake from "./BidStake";
import {
  handleCardClick,
  handleBidding,
  resetSelection,
} from "../helper/GameLogic";
import { deckSuits } from "../helper/cards";

export const PlayGame = ({
  activePlayer,
  timer,
  setTimer,
  screenStage,
  setScreenStage,
  selectedCard,
  setSelectedCard,
  setPlayerOutput,
  setShowCard,
  showCard,
}) => {
  useEffect(() => {
    if (timer <= 0) {
      if (screenStage === 0) {
        setScreenStage(1); // Move to BidStake after CardSelection
        setTimer(10); // Reset timer for BidStake
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
        handleBidding(bidAmount, setPlayerOutput, activePlayer, selectedCard)
      }
      resetSelection={() =>
        resetSelection(setSelectedCard, setScreenStage, setTimer, setShowCard)
      }
    />
  );
};
