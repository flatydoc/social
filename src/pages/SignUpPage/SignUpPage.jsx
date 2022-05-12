import React, { useState } from "react";
import styles from "./signUpPage.module.scss";
import axios from "axios";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

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
          "/api/signup/signup",
          { ...form },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
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
        <div className={`p-float-label ${styles.formInput}`}>
          <InputText name="name" id="inputtext" onChange={changeHandler} />
          <label htmlFor="inputtext">Name</label>
        </div>
        <div className={`p-float-label ${styles.formInput}`}>
          <InputText name="email" id="inputtext" onChange={changeHandler} />
          <label htmlFor="inputtext">Email</label>
        </div>
        <div className={`p-float-label ${styles.formInput}`}>
          <Password
            name="password"
            inputId="password"
            onChange={changeHandler}
            toggleMask
          />
          <label htmlFor="password">Password</label>
        </div>
        <Button onClick={registerHandler} label="Sign Up" />
      </form>
    </div>
  );
};
