import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./chatItem.module.scss";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";

const setActive = ({ isActive }) => (isActive ? styles.active : "");

export const ChatItem = (props) => {
  let path = "/messanger/" + props.id;
  return (
    <div className={styles.chatItem}>
      <NavLink to={path} className={setActive}>
        {props.name}
        <Avatar icon="pi pi-user" size="xlarge">
          <Badge value="4" severity="info" />
        </Avatar>
      </NavLink>
    </div>
  );
};
