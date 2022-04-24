import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./sideBarLink.module.scss";
import { Badge } from "primereact/badge";

export const SideBarLink = (props) => {
  const customLink = ({ isActive }) =>
    isActive ? styles.sideBarLink + " " + styles.active : styles.sideBarLink;

  return (
    <NavLink to={props.link} className={customLink}>
      <i
        className={`${props.icon} ${styles.navIcon}`}
        style={{ fontSize: "20px" }}
      ></i>
      <p>{props.name}</p>
      {props.value > 0 && (
        <Badge
          value={props.value}
          severity={props.severity}
          className={styles.navBadge}
        />
      )}
    </NavLink>
  );
};
