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
  shuffledDeck,
}) => {
  useEffect(() => {
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

  if (!playerOutput) return null;
  console.log(screenStage);

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
