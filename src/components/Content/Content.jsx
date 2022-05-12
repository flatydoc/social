import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./content.module.scss";
import { Profile } from "./Profile/Profile";
import { Messanger } from "./Messanger/Messanger";
import { News } from "./News/News";
import { Friends } from "./Friends/Friends";
import { Settings } from "./Settings/Settings";
import { SignInPage } from "../../pages/SignInPage/SignInPage";
import { SignUpPage } from "../../pages/SignUpPage/SignUpPage";

export const Content = (props) => {
  return (
    <main className={styles.content}>
      <Routes>
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/messanger/*" element={<Messanger />} />
        <Route path="/news/*" element={<News />} />
        <Route path="/friends/*" element={<Friends />} />
        <Route
          path="/settings/*"
          element={<Settings switchTheme={props.switchTheme} />}
        />
        <Route path="/signin/*" element={<SignInPage />} />
        <Route path="/signup/*" element={<SignUpPage />} />
      </Routes>
    </main>
  );
};
