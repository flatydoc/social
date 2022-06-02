import React, { useState, useContext } from "react";
import styles from "./signInPage.module.scss";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { SignInContext } from "../../context/SignInContext";
import { config } from "../../config";

export const SignInPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const { login } = useContext(SignInContext);

  const loginHandler = async () => {
    try {
      await axios
        .post(
          `${config.apiUrl}/api/signin`,
          { ...form }
          // {
          //   headers: {
          //     "Access-Control-Allow-Origin": "*",
          //     "Content-Type": "application/json",
          //   },
          // }
        )
        .then((res) => {
          login(res.data.token, res.data.userId);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.popup}>
      <h2>Sign In</h2>
      <form className={styles.popupForm} onSubmit={(e) => e.preventDefault()}>
        <div className={`p-float-label w-full ${styles.input}`}>
          <InputText
            name="email"
            id="email"
            onChange={changeHandler}
            className={"w-full"}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className={`p-float-label w-full ${styles.input}`}>
          <Password
            name="password"
            inputId="password"
            onChange={changeHandler}
            toggleMask
            feedback={false}
            className={"w-full"}
          />
          <label htmlFor="password">Password</label>
        </div>
        <Button onClick={loginHandler} label="Sign In" />
      </form>
      <div className="flex align-items-center justify-content-between">
        <p>Don't have an account?</p>
        <NavLink className={styles.link} to="/signup">
          Sign up
        </NavLink>
      </div>
    </div>
  );
};
