import React from "react";
import { BrowserRouter } from "react-router-dom";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Header } from "./Header/Header";
import { Content } from "./Content/Content";
import styles from "./app.module.scss";
import useLocalStorage from "use-local-storage";
import { SideBarContainer } from "./SideBar/SideBarContainer";

export const App = (props) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <BrowserRouter>
      <div className={styles.app} data-theme={theme}>
        <Header />
        <SideBarContainer />
        <Content switchTheme={switchTheme} />
      </div>
    </BrowserRouter>
  );
};
