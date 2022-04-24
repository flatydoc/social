import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./chatItem.module.scss";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";

export const ChatItem = (props) => {
  const customLink = ({ isActive }) =>
    isActive ? styles.chatItem + " " + styles.active : styles.chatLink;

  let path = "/messanger/" + props.id;

  return (
    <div className={styles.chatItem}>
      <NavLink to={path} className={customLink}>
        <p>{props.name}</p>
        <Avatar icon="pi pi-user" size="large">
          {props.value > 0 && <Badge value={props.value} severity="info" />}
        </Avatar>
      </NavLink>
    </div>
  );
};
