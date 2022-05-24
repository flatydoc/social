import React, { useState } from "react";
import styles from "./signUpPage.module.scss";
import axios from "axios";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";
import { config } from "../../config";

export const SignUpPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  const registerHandler = async () => {
    try {
      await axios
        .post(
          `${config.apiUrl}/api/signup`,
          { ...form }
          // {
          //   headers: {
          //     "Access-Control-Allow-Origin": "*",
          //     "Content-Type": "application/json",
          //   },
          // }
        )
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.popup}>
      <h2>Sign Up</h2>
      <form className={styles.popupForm} onSubmit={(e) => e.preventDefault()}>
        <div className={`p-float-label w-full ${styles.input}`}>
          <InputText
            name="name"
            id="name"
            onChange={changeHandler}
            className={"w-full"}
          />
          <label htmlFor="name">Name</label>
        </div>
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
            feedback={true}
            className={"w-full"}
          />
          <label htmlFor="password">Password</label>
        </div>
        <Button onClick={registerHandler} label="Sign Up" />
      </form>
      <div className="flex align-items-center justify-content-between">
        <p>Do you already have an account?</p>
        <NavLink className={styles.link} to="/signin">
          Sign in
        </NavLink>
      </div>
    </div>
  );
};
