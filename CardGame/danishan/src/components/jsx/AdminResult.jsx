import React from "react";
import styles from "../css/Result.module.css";

export const AdminResult = ({ winners, gameProfit }) => {
  const CompanyProfit = ({ text, isNoOneWins = false }) => {
    return (
      <div className={`${styles.result}`}>
        {isNoOneWins && <p className={styles.text}>Not a single Player Wins</p>}
        <p className={styles.congr}>Congratulations! {text}</p>
        <p className={styles.profit}>Your Profit: {gameProfit}</p>
      </div>
    );
  };

  if (winners.length === 0) {
    return <CompanyProfit isNoOneWins text={"You won the maximum profit."} />;
  }

  return (
    <div className={`${styles.result} ${styles.adminResult}`}>
      <div className={styles.winner}>
        <p className={styles.congr} style={{ textAlign: "center" }}>
          Company Profit
        </p>
        <p className={styles.profit} style={{ textAlign: "center" }}>
          {gameProfit}
        </p>
      </div>

      {winners.map((playerResult) => {
        return (
          <div className={styles.winner} key={playerResult.playerCode}>
            <p className={styles.text}>Player ID: {playerResult.playerCode}</p>
            <p className={styles.text}>
              Winning Amount: {playerResult.winningAmount}
            </p>
            <p className={styles.text}>Bid Amount: {playerResult.winningBid}</p>
            <p className={styles.text}>
              Profit: {playerResult.winningAmount - playerResult.winningBid}
            </p>
          </div>
        );
      })}
    </div>
  );
};
