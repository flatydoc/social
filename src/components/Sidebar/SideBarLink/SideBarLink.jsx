import React from "react";
import { NavLink } from "react-router-dom";
import { Badge } from "primereact/badge";
import styles from "./sideBarLink.module.scss";

export const SideBarLink = ({ link, name, icon, value, severity }) => {
  const customLink = ({ isActive }) =>
    isActive ? styles.sideBarLink + " " + styles.active : styles.sideBarLink;

  return (
    <NavLink to={link} className={customLink}>
      <i className={`${icon} ${styles.icon}`} style={{ fontSize: "20px" }}></i>
      <p>{name}</p>
      {value > 0 && (
        <Badge value={value} severity={severity} className={styles.badge} />
      )}
    </NavLink>
  );
};
