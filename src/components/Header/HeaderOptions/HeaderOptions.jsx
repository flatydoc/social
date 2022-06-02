import React, { useContext } from "react";
import styles from "./headerOptions.module.scss";
import { NavLink } from "react-router-dom";
import { SignInContext } from "../../../context/SignInContext";
import { PrimeIcons } from "primereact/api";

export const HeaderOptions = () => {
  const { logout, isLogin } = useContext(SignInContext);

  return (
    <div className={styles.headerOptions}>
      <h3>HeaderOPtions</h3>
      {isLogin ? (
        <button className={styles.headerButton} onClick={logout}>
          <i className="pi pi-user-minus" style={{ fontSize: "1.5em" }} />
          Logout
        </button>
      ) : (
        <NavLink
          className={styles.headerButton}
          icon={PrimeIcons.USER}
          to="/signin"
        >
          <i className="pi pi-user-plus" style={{ fontSize: "1.5em" }} />
          Login
        </NavLink>
      )}
    </div>
  );
};
