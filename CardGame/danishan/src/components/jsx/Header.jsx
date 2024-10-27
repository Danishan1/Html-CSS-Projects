import React, { useEffect } from "react";
import styles from "../css/CardGame.module.css";
import { Button } from "./Button";
import { Timer } from "./Timer";
import { deck } from "../helper/cards";

const selectRandomCard = () => deck[Math.floor(Math.random() * deck.length)];
const selectRandomBid = () =>
  Array.from({ length: 100 }, (_, k) => k + 1)[Math.floor(Math.random() * 100)];

export const Header = ({
  profile,
  setProfile,
  playerDropdown,
  setPlayerDropdown,
  playerCode,
  setActivePlayer,
  timer,
  setTimer,
  onTimeout,
  screenStage,
  showCard,
  setShowCard,
  playerOutput,
  setPlayerOutput,
}) => {
  useEffect(() => {
    if (timer === 1) {
      let updatedOutput = {};

      if (screenStage === 0) {
        updatedOutput = playerCode.reduce((acc, player) => {
          const playerKey = `Player-${player}`;
          acc[playerKey] = {
            card: playerOutput?.[playerKey]?.card || selectRandomCard(),
            bid: playerOutput?.[playerKey]?.bid || null,
          };
          return acc;
        }, {});
      } else if (screenStage === 1) {
        updatedOutput = playerCode.reduce((acc, player) => {
          const playerKey = `Player-${player}`;
          acc[playerKey] = {
            card: playerOutput[playerKey]?.card,
            bid: playerOutput?.[playerKey]?.bid || selectRandomBid(),
          };
          return acc;
        }, {});
      }

      if (JSON.stringify(updatedOutput) !== JSON.stringify(playerOutput)) {
        setPlayerOutput(updatedOutput);
      }
    }
  }, [timer, screenStage, playerCode, playerOutput, setPlayerOutput]);

  return (
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        <Button
          text={"Admin"}
          onClick={() =>
            setProfile((prev) => (prev === "admin" ? "player" : "admin"))
          }
        />
        <Button
          text={"Players"}
          onClick={() => setPlayerDropdown((prev) => !prev)}
        />
        {playerDropdown && (
          <div className={styles.playerDropdown}>
            {playerCode.map((player) => (
              <div
                key={player}
                className={styles.player}
                onClick={() => {
                  setActivePlayer(player);
                  setPlayerDropdown(false);
                  setProfile("player");
                  setShowCard(false);
                }}
              >
                {player}
              </div>
            ))}
          </div>
        )}
      </div>

      <p className={styles.text}>
        {profile === "admin" ? "Admin Panel" : "Player Planel"}
      </p>

      <div className={styles.rightHeader}>
        {profile !== "admin" && screenStage === 0 && (
          <Button
            text={showCard ? "Hide Cards" : "Show Cards"}
            onClick={() => setShowCard((prev) => !prev)}
          />
        )}
        <Timer
          timer={timer}
          setTimer={setTimer}
          onTimeout={onTimeout}
          screenStage={screenStage}
        />
      </div>
    </div>
  );
};

export default Header;
