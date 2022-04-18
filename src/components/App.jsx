import React from "react";
import { BrowserRouter } from "react-router-dom";
import classes from "./App.module.scss";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Content } from "./Content/Content";

export const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header />
        <Sidebar />
        <Content />
      </div>
    </BrowserRouter>
  );
};
