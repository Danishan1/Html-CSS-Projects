import React, { useEffect, useState } from "react";
import styles from "../css/DeckCards.module.css";
import Card from "./Card";
import { Button } from "./Button";

export const BidStake = ({
  selectedCard,
  timer,
  setBid,
  resetSelection,
  setTimer,
  activePlayer,
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

  useEffect(() => {
    if (timer === 0) setBid(1);
  }, [timer, setBid]);

  if (selectedCard === null)
    return (
      <div className={styles.singleCard}>
        <p className={styles.text}>
          Bad Luck!!! You have not selected any card therefore you are out of
          the game.
        </p>
      </div>
    );

  if (!activePlayer)
    return (
      <div className={styles.singleCard}>
        <p className={styles.playerText}>Select a Player</p>
      </div>
    );

  return (
    <div className={styles.singleCard}>
      <p className={styles.playerText}>Player-{activePlayer}</p>
      <Card code={selectedCard} setResult={() => {}} isShow={true} />
      <p className={styles.text}>
        You have successfully selected a card. Stake on it between 1 to 100.
      </p>
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
        <Button text={"Confirm Bid"} onClick={confirmBid} />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default BidStake;
