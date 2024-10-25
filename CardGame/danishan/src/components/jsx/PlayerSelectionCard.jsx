import styles from "../css/PlayerSelectionCard.module.css";
import Card from "./Card";

export const PlayerSelectionCard = ({ playerName, selectedCard, bid }) => {
  if (!selectedCard) return null;

  return (
    <div className={styles.playerSelectionCard}>
      <p className={styles.text}>{playerName}</p>
      <p className={styles.text}>Bidding Amount is {bid}</p>
      <div className={styles.card}>
        <Card code={selectedCard} setResult={() => {}} isShow={true} />
      </div>
    </div>
  );
};
