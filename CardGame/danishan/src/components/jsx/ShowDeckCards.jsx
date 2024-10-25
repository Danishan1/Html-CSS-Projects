import React, { useState } from "react";
import styles from "../css/ShowDeckCards.module.css";
import Card from "./Card";

export const ShowDeckCards = ({
  deck,
  setBid,
  timer,
  setSelectedCard,
  setTimer,
  isShow,
}) => {
  const [selectedCardLocal, setSelectedCardLocal] = useState(null); // Local state
  const [stake, setStake] = useState("1");
  const [error, setError] = useState("");

  const handleCardClick = (code) => {
    if (!selectedCardLocal) {
      setSelectedCardLocal(code);
      setSelectedCard(code);
      setTimer(10);
      setError("");
    }
  };

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
      setSelectedCardLocal(null);
      setSelectedCard(null);
      setTimer(10);
      setError("");
    } else {
      setError("Invalid bid amount.");
    }
  };

  return (
    <div className={styles.showDeckCards}>
      {!selectedCardLocal &&
        deck.map((suit, suitIndex) => (
          <div key={suitIndex} className={styles.suitColumn}>
            {suit.map((code) => (
              <div key={code} className={styles.cardWrapper}>
                <Card
                  code={code}
                  setResult={() => handleCardClick(code)}
                  isShow={isShow}
                />
              </div>
            ))}
          </div>
        ))}
      {selectedCardLocal && (
        <div className={styles.singleCard}>
          <Card code={selectedCardLocal} setResult={() => {}} isShow={true} />
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
      )}
    </div>
  );
};

export default ShowDeckCards;
