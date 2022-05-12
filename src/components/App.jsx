import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Header } from "./Header/Header";
import { Content } from "./Content/Content";
import styles from "./app.module.scss";
import useLocalStorage from "use-local-storage";
import { SideBarContainer } from "./SideBar/SideBarContainer";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { useRoutes } from "../routes";

export const App = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const routes = useRoutes();

  return (
    <BrowserRouter>
      <div className={styles.app} data-theme={theme}>
        <Routes>
          <Route
            path="/*"
            element={[
              <Header />,
              <SideBarContainer />,
              <Content switchTheme={switchTheme} />,
            ]}
          />
          {routes}
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
