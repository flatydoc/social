import React from "react";
import styles from "./headerOptions.module.scss";
import { NavLink } from "react-router-dom";

export const HeaderOptions = () => {
  return (
    <div className={styles.headerOptions}>
      <h3>HeaderOPtions</h3>
      <NavLink to="/signup">зарегистрироваться</NavLink>
    </div>
  );
};
