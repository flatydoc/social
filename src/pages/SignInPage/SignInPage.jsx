import React, { useState } from "react";
import styles from "./signInPage.module.scss";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";

export const SignInPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  return (
    <div className={styles.popup}>
      <h2>Sign In</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="p-float-label">
          <InputText name="name" id="inputtext" onChange={changeHandler} />
          <label htmlFor="inputtext">Name</label>
        </div>
        <div className="p-float-label">
          <InputText name="email" id="inputtext" onChange={changeHandler} />
          <label htmlFor="inputtext">Email</label>
        </div>
        <div className="p-float-label">
          <Password
            name="password"
            inputId="password"
            onChange={changeHandler}
            toggleMask
          />
          <label htmlFor="password">Password</label>
        </div>
        <button>Sign In</button>
      </form>
    </div>
  );
};
