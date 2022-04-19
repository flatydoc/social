import React from "react";
import styles from "./headerLogo.module.scss";
import img from "./logo.png";

export const HeaderLogo = () => {
  return (
    <div className={styles.headerLogo}>
      <img src={img} alt="Social logo" />
      <h1>Social</h1>
    </div>
  );
};
