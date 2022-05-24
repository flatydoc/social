import React, { useContext } from "react";
import styles from "./headerOptions.module.scss";
import { NavLink } from "react-router-dom";
import { SignInContext } from "../../../context/SignInContext";
import { Button } from "primereact/button";

export const HeaderOptions = () => {
  const { logout, isLogin } = useContext(SignInContext);

  return (
    <div className={styles.headerOptions}>
      <h3>HeaderOPtions</h3>
      {isLogin ? (
        <Button onClick={logout}>Выйти</Button>
      ) : (
        <NavLink to="/signin">Войти</NavLink>
      )}
    </div>
  );
};
