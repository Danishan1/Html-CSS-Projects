import styles from "../css/Admin.module.css";
import { PlayerSelectionCard } from "./PlayerSelectionCard";

export const Admin = () => {

  return (
    <div className={styles.admin}>
      <PlayerSelectionCard
        playerName={"Palyer-01"}
        selectedCard={"DK"}
        bid={50}
      />
      <PlayerSelectionCard
        playerName={"Palyer-01"}
        selectedCard={"DK"}
        bid={50}
      />
      <PlayerSelectionCard
        playerName={"Palyer-01"}
        selectedCard={"DK"}
        bid={50}
      />
      <PlayerSelectionCard
        playerName={"Palyer-01"}
        selectedCard={"DK"}
        bid={50}
      />
      <PlayerSelectionCard
        playerName={"Palyer-01"}
        selectedCard={"DK"}
        bid={50}
      />
    </div>
  );
};
