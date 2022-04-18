import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./ChatItem.module.scss";

const setActive = ({ isActive }) => (isActive ? classes.active : "");

export const ChatItem = (props) => {
  let path = "/messanger/" + props.id;
  return (
    <div className={classes.chatItem}>
      <NavLink to={path} className={setActive}>
        {props.name}
      </NavLink>
    </div>
  );
};
