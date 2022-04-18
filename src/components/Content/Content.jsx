import React from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./Content.module.scss";
import { Profile } from "./Profile/Profile";
import { Messanger } from "./Messanger/Messanger";
import { News } from "./News/News";
import { Friends } from "./Friends/Friends";

export const Content = () => {
  return (
    <div className={classes.content}>
      <Routes>
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/messanger/*" element={<Messanger />} />
        <Route path="/news/*" element={<News />} />
        <Route path="/friends/*" element={<Friends />} />
      </Routes>
    </div>
  );
};
