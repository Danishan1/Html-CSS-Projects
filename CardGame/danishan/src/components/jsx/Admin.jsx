import styles from "../css/Admin.module.css";
import { PlayerSelectionCard } from "./PlayerSelectionCard";

export const Admin = ({ playerOutput }) => {
  console.log(playerOutput);

  if (!playerOutput) return null;

  return (
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
  );
};
