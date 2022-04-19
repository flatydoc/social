import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./sideBarLink.module.scss";
import { Badge } from "primereact/badge";

export const SideBarLink = ({ link, name, icon, value }) => {
  const customLink = ({ isActive }) =>
    isActive ? styles.sideBarLink + " " + styles.active : styles.sideBarLink;

  return (
    <NavLink to={link} className={customLink}>
      <i className={`${icon} ${styles.icon}`} style={{ fontSize: "20px" }}></i>
      <p>{name}</p>
      <Badge value={value} severity="info" className={styles.navBadge} />
    </NavLink>
  );
};
