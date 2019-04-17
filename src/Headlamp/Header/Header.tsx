import React from "react";
import styles from "./Header.module.css";

interface Props {
  onRequestClose: () => void;
}

// max-height: 15%
export const Header = ({ onRequestClose }: Props) => (
  <React.Fragment>
    <button className={styles.closeButton} onClick={onRequestClose}>
      X
    </button>
    <div className={styles.titleContainer}>
      <h2 className={styles.title}>TITLE</h2>
    </div>
    <div className={styles.iconList}>
      <button className={styles.actionable}>+</button>
      <button className={styles.actionable}>-</button>
    </div>
  </React.Fragment>
);
