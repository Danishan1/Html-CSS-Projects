import React, { useEffect, useState } from "react";
import styles from "../css/Admin.module.css";
import { PlayerSelectionCard } from "./PlayerSelectionCard";
import { CardDrawn } from "./CardDrawn";
import { AdminResult } from "./AdminResult";

export const Admin = ({
  playerOutput,
  selectedCards,
  setSelectedCards,
  remainingDeck,
  setRemainingDeck,
  screenStage,
  winners,
  setWinners,
}) => {
  const [gameProfit, setGameProfit] = useState([]);

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
      const winnerList = Object.entries(playerOutput).filter(
        ([, playerInfo]) => playerInfo.card === secondCard
      );

      // Calculate total bid amount
      const totalBidAmount = Object.values(playerOutput).reduce(
        (total, playerInfo) => total + (playerInfo.bid || 0),
        0
      );

      // Distribute the amount among winners
      const winningAmount = (totalBidAmount / (winnerList.length + 1)).toFixed(
        2
      );
      
      const winnersWithAmount = winnerList.map(([playerCode, playerInfo]) => ({
        playerCode,
        winningCard: playerInfo.card,
        winningBid: playerInfo.bid,
        winningAmount,
      }));

      // Update the winners state
      setWinners(winnersWithAmount);
      setGameProfit(winningAmount);
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
      ) : screenStage === 2 ? (
        <CardDrawn
          isShow={true}
          selectedCards={selectedCards}
          remainingDeck={remainingDeck}
        />
      ) : (
        <AdminResult winners={winners} gameProfit={gameProfit} />
      )}
    </>
  );
};
