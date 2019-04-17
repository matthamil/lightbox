import React, { useState } from "react";
import { NavigationButton } from "./NavigationButton";
import styles from "./Body.module.css";
import { Aside } from "./Aside";

export const Body = () => {
  const [showAside, setAside] = useState(false);
  const bodyClass = showAside
    ? styles.compactContainer
    : styles.expandContainer;
  return (
    <React.Fragment>
      <NavigationButton direction="LEFT" />
      <div className={bodyClass}>
        <p>Body</p>
        <button onClick={() => setAside(!showAside)}>
          {showAside ? "Hide" : "Show"}
        </button>
      </div>
      {showAside ? <Aside /> : null}
      <NavigationButton direction="RIGHT" />
    </React.Fragment>
  );
};
