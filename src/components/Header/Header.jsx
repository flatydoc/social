import React from "react";
import styles from "./header.module.scss";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderOptions } from "./HeaderOptions/HeaderOptions";

export const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <HeaderOptions />
    </header>
  );
};
