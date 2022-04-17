import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import classes from "./App.module.scss";
import { Header } from "./Header/Header";
import { Profile } from "./Profile/Profile";
import { Sidebar } from "./Sidebar/Sidebar";
import { Messanger } from "./Messanger/Messanger";
import { News } from "./News/News";
import { Friends } from "./Friends/Friends";

export const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header />
        <Sidebar />
        <div className={classes.content}>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messanger" element={<Messanger />} />
            <Route path="/news" element={<News />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
