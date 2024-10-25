import React, { useState, useEffect } from "react";
import styles from "../css/ShowDeckCards.module.css";
import Card from "./Card";

export const ShowDeckCards = ({ setBid }) => {
  // Separate the deck into different suits
  const clubs = [
    "CA",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "C9",
    "C10",
    "CJ",
    "CQ",
    "CK",
  ];
  const hearts = [
    "HA",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "H7",
    "H8",
    "H9",
    "H10",
    "HJ",
    "HQ",
    "HK",
  ];
  const diamonds = [
    "DA",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "D8",
    "D9",
    "D10",
    "DJ",
    "DQ",
    "DK",
  ];
  const spades = [
    "SA",
    "S2",
    "S3",
    "S4",
    "S5",
    "S6",
    "S7",
    "S8",
    "S9",
    "S10",
    "SJ",
    "SQ",
    "SK",
  ];
  const deck = [clubs, diamonds, hearts, spades]; // 4 separate suit arrays

  const [selectedCard, setSelectedCard] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [stake, setStake] = useState("1");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let countdown;
    if (selectedCard) {
      countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(countdown);
            setSelectedCard(null);
            setError("Time expired. Please select a card again.");
            return 10;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [selectedCard]);

  const handleCardClick = (code) => {
    if (!selectedCard) {
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
      setSelectedCard(null);
      setError("");
      setTimer(10);
    } else {
      setError("Invalid bid amount.");
    }
  };

  return (
    <div className={styles.showDeckCards}>
      <div className={styles.header}>
        <button
          className={styles.btn}
          onClick={() => {
            setShowCard((pre) => !pre);
          }}
        >
          {showCard ? "Hide Cards" : "Show Cards"}
        </button>
      </div>
      <div className={styles.body}>
        {!selectedCard &&
          deck.map((suit, suitIndex) => (
            <div key={suitIndex} className={styles.suitColumn}>
              {suit.map((code) => (
                <div key={code} className={styles.cardWrapper}>
                  <Card
                    code={code}
                    setResult={() => handleCardClick(code)}
                    isShow={showCard}
                  />
                </div>
              ))}
            </div>
          ))}
        {selectedCard && (
          <div className={styles.singleCard}>
            <Card code={selectedCard} setResult={() => {}} isShow={true} />
            <p className={styles.text}>
              You have successfully selected a card. Stake on it between 1 to
              100
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
    </div>
  );
};

export default ShowDeckCards;
