import React, { useState } from "react";
import styles from "../css/DeckCards.module.css";
import Card from "./Card";

export const BidStake = ({
  selectedCard,
  timer,
  setBid,
  resetSelection,
  setTimer,
}) => {
  const [stake, setStake] = useState("1");
  const [error, setError] = useState("");

  const handleStakeChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 1 && value <= 100) {
      setStake(value);
      setError("");
    } else {
      setStake("1");
      setError("Please enter a number between 1 and 100.");
    }
  };

  const confirmBid = () => {
    if (stake >= 1 && stake <= 100) {
      setBid(stake);
      resetSelection();
      setTimer(10);
      setError("");
    } else {
      setError("Invalid bid amount.");
    }
  };

  if (selectedCard === null)
    return (
      <div className={styles.singleCard}>
        <p className={styles.text}>
          Bad Luck!!! You have not selected any card therefore you are out of
          the game.
        </p>
      </div>
    );

  return (
    <div className={styles.singleCard}>
      <Card code={selectedCard} setResult={() => {}} isShow={true} />
      <p className={styles.text}>
        You have successfully selected a card. Stake on it between 1 to 100.
      </p>
      <div className={styles.timer}>Time remaining: {timer} seconds</div>
      <div className={styles.inputBid}>
        <input
          type="number"
          value={stake}
          onChange={handleStakeChange}
          className={styles.stakeInput}
          placeholder="Bid"
          min="1"
          max="100"
        />
        <button className={styles.btn} onClick={confirmBid}>
          Confirm Bid
        </button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default BidStake;
