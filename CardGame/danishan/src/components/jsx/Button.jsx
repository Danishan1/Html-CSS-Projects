import styles from "../css/Button.module.css";

export const Button = ({ text, onlick }) => {
  return (
    <button className={styles.btn} onClick={onlick}>
      {text}
    </button>
  );
};
