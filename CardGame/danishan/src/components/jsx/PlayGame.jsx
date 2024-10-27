import React, { useEffect } from "react";
import CardSelection from "./CardSelection";
import BidStake from "./BidStake";
import { handleBidding, resetSelection } from "../helper/GameLogic";
import { CardDrawn } from "./CardDrawn";

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
  selectedCards,
  remainingDeck,
  shuffledDeck,
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
  ) : screenStage === 1 ? (
    <BidStake
      activePlayer={activePlayer}
      playerOutput={playerOutput}
      timer={timer}
      setBid={(bidAmount) =>
        handleBidding(bidAmount, setPlayerOutput, activePlayer, selectedCard)
      }
      selectedCards={selectedCards}
      remainingDeck={remainingDeck}
      shuffledDeck={shuffledDeck}
    />
  ) : screenStage === 2 ? (
    <CardDrawn
      isShow={true}
      selectedCards={selectedCards}
      remainingDeck={remainingDeck}
    />
  ) : (
    <></>
  );
};
