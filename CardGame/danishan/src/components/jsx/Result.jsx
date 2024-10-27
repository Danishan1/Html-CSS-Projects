import React from "react";
import styles from "../css/Result.module.css";

export const Result = ({ winners, activePlayer }) => {
  if (!activePlayer)
    return (
      <div className={styles.singleCard}>
        <p className={styles.playerText}>Select a Player</p>
      </div>
    );

  // Find the active player's result in the winners array
  const activePlayerResult = winners.find(
    (winner) => winner.playerCode === `Player-${activePlayer}`
  );

  return (
    <div className={styles.result}>
      {activePlayerResult ? (
        <div>
          <p>Congratulations! You won the match</p>
          <p>Winning Amount: {activePlayerResult.winningAmount}</p>
          <p>Your Bid Amount: {activePlayerResult.winningBid}</p>
          <p>
            Your Profit:{" "}
            {activePlayerResult.winningAmount - activePlayerResult.winningBid}
          </p>
        </div>
      ) : (
        <p>Bad Luck! You lost the match, try your luck next time.</p>
      )}
      <p>Thanks for Playing the Game</p>
    </div>
  );
};
