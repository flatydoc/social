import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.scss";

const setActive = ({ isActive }) => (isActive ? classes.active : "");

export const Sidebar = () => {
  return (
    <nav className={classes.sidebar}>
      <ul>
        <li>
          <NavLink to="/profile" className={setActive}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/messanger" className={setActive}>
            Messanger
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={setActive}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/friends" className={setActive}>
            Friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
