import React, { useEffect, useState } from "react";
import styles from "../css/DeckCards.module.css";
import Card from "./Card";
import { Button } from "./Button";
import { WaitingScreen } from "./WaitingScreen";

export const BidStake = ({ playerOutput, timer, setBid, activePlayer }) => {
  const [stake, setStake] = useState("1");
  const [error, setError] = useState("");
  const [waitingScreen, setWaitingScreen] = useState(false);

  useEffect(() => {
    if (timer === 0) setBid(1);
  }, [timer, setBid]);

  useEffect(() => {
    if (timer === 0) setWaitingScreen(false);
  }, [timer, setWaitingScreen]);

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
      setWaitingScreen(true);
      setError("");
    } else {
      setError("Invalid bid amount.");
    }
  };

  if (!activePlayer)
    return (
      <div className={styles.singleCard}>
        <p className={styles.playerText}>Select a Player to take the stake</p>
      </div>
    );

  const activePlayerInfo = playerOutput[`Player-${activePlayer}`];

  if (!activePlayerInfo || !activePlayerInfo.card) {
    console.log(activePlayerInfo);
    return (
      <div className={styles.singleCard}>
        <p className={styles.text}>
          Bad Luck!!! You have not selected any card therefore you are out of
          the game.
        </p>
      </div>
    );
  }

  if (waitingScreen && activePlayerInfo && activePlayerInfo?.bid) {
    return (
      <div className={styles.cardSelection}>
        <WaitingScreen
          text={"Congratulations!! You have successfully Bid."}
          timer={timer}
        />
      </div>
    );
  }

  return (
    <div className={styles.singleCard}>
      <p className={styles.playerText}>Player-{activePlayer}</p>
      <Card code={activePlayerInfo.card} setResult={() => {}} isShow={true} />
      <p className={styles.text}>
        Card selected successfully. Place a stake between 1 and 100, or a
        default bid of 1 will be applied.
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
