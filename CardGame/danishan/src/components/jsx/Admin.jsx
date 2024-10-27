import React, { useEffect } from "react";
import styles from "../css/Admin.module.css";
import { PlayerSelectionCard } from "./PlayerSelectionCard";
import { CardDrawn } from "./CardDrawn";

export const Admin = ({
  playerOutput,
  selectedCards,
  setSelectedCards,
  remainingDeck,
  setRemainingDeck,
  screenStage,
  setWinners,
}) => {
  useEffect(() => {
    // Pick cards until we have two selected cards
    if (selectedCards.length < 2) {
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
  }, [selectedCards, remainingDeck, setSelectedCards, setRemainingDeck]);

  useEffect(() => {
    // Check if we have selected the second card to determine winners
    if (
      screenStage === 2 &&
      playerOutput &&
      Object.keys(playerOutput).length > 0 &&
      selectedCards.length === 2
    ) {
      const secondCard = selectedCards[1];

      // Determine winners based on the condition playerOutput[card] === secondCard
      const winners = Object.entries(playerOutput).filter(
        ([, playerInfo]) => playerInfo.card === secondCard
      );

      // Calculate total bid amount
      const totalBidAmount = Object.values(playerOutput).reduce(
        (total, playerInfo) => total + (playerInfo.bid || 0),
        0
      );

      // Distribute the amount among winners
      const winningAmount = totalBidAmount / (winners.length + 1);
      const winnersWithAmount = winners.map(([playerCode, playerInfo]) => ({
        playerCode,
        winningCard: playerInfo.card,
        winningBid: playerInfo.bid,
        winningAmount,
      }));

      // Update the winners state
      setWinners(winnersWithAmount);
    }
  }, [selectedCards, playerOutput, setWinners, screenStage]);

  if (!playerOutput) return null;

  return (
    <>
      {screenStage < 2 ? (
        <div className={styles.admin}>
          {Object.entries(playerOutput).map(([playerCode, playerInfo]) => (
            <PlayerSelectionCard
              key={playerCode}
              playerName={playerCode}
              selectedCard={playerInfo.card || "NA"}
              bid={playerInfo.bid || "NA"}
            />
          ))}
        </div>
      ) : (
        <CardDrawn
          isShow={true}
          selectedCards={selectedCards}
          remainingDeck={remainingDeck}
        />
      )}
    </>
  );
};
