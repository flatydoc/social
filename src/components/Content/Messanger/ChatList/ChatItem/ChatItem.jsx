import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./chatItem.module.scss";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";

export const ChatItem = ({ id, name, value }) => {
  const customLink = ({ isActive }) =>
    isActive ? styles.chatItem + " " + styles.active : styles.chatItem;

  let path = "/messanger/" + id;

  return (
    <NavLink to={path} className={customLink}>
      <p>{name}</p>
      <Avatar icon="pi pi-user" size="large" shape="circle">
        {value > 0 && (
          <Badge value={value} className={styles.badge} severity="info" />
        )}
      </Avatar>
    </NavLink>
  );
};
