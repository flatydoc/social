import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./chatItem.module.scss";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";

export const ChatItem = (props) => {
  const customLink = ({ isActive }) =>
    isActive ? styles.chatItem + " " + styles.active : styles.chatItem;

  let path = "/messanger/" + props.id;

  return (
    <NavLink to={path} className={customLink}>
      <Avatar image={props.avatarUrl} className={styles.avatar}>
        {props.value > 0 && (
          <Badge value={props.value} className={styles.badge} severity="info" />
        )}
      </Avatar>
      <p>{props.name}</p>
    </NavLink>
  );
};
