import React from "react";
// CSS
import styles from "./navbar.module.scss";

export const HeroNavbar = (props) => {
  console.log(styles);
  return (
    <nav className={styles.Container}>
      <span className={styles.Main}>Fake Navbar</span>
      <div className={styles.Links}>
        <span>Home</span>
        <span>Link A</span>
        <span>Link B</span>
      </div>
      {props.children}
    </nav>
  );
};
