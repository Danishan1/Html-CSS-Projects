import React from "react";
import styles from "../css/CardGame.module.css";

import { Button } from "./Button";
import { Timer } from "./Timer";

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
}) => {
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

      {profile !== "admin" && (
        <div className={styles.rightHeader}>
          {screenStage === 0 && (
            <Button
              text={showCard ? "Hide Cards" : "Show Cards"}
              onClick={() => setShowCard((prev) => !prev)}
            />
          )}
          <Timer timer={timer} setTimer={setTimer} onTimeout={onTimeout} />
        </div>
      )}
    </div>
  );
};

export default Header;
