import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./content.module.scss";
import { Profile } from "./Profile/Profile";
import { Messanger } from "./Messanger/Messanger";
import { News } from "./News/News";
import { Friends } from "./Friends/Friends";
import { Settings } from "./Settings/Settings";

export const Content = (props) => {
  return (
    <main className={styles.content}>
      <Routes>
        <Route
          path="/profile/*"
          element={
            <Profile profile={props.state.profile} dispatch={props.dispatch} />
          }
        />
        <Route
          path="/messanger/*"
          element={
            <Messanger
              messanger={props.state.messanger}
              dispatch={props.dispatch}
            />
          }
        />
        <Route path="/news/*" element={<News />} />
        <Route path="/friends/*" element={<Friends />} />
        <Route
          path="/settings/*"
          element={<Settings switchTheme={props.switchTheme} />}
        />
      </Routes>
    </main>
  );
};
