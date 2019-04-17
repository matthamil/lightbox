import React from "react";
import styles from "./NavigationButton.module.css";

interface Props {
  direction: "LEFT" | "RIGHT";
}

export const NavigationButton = ({ direction }: Props) => {
  const directionStyle = direction === "LEFT" ? styles.left : styles.right;
  const className = [styles.container, directionStyle].join(" ");
  return (
    <button className={className}>{direction === "LEFT" ? "<" : ">"}</button>
  );
};
