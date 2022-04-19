import React from "react";
import { BrowserRouter } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import styles from "./app.module.scss";
import { Header } from "./Header/Header";
import { SideBar } from "./SideBar/SideBar";
import { Content } from "./Content/Content";

export const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <SideBar />
        <Content />
      </div>
    </BrowserRouter>
  );
};
