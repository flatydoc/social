import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import styles from "./app.module.scss";
import useLocalStorage from "use-local-storage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { SignInContext } from "./context/SignInContext";
//import { ThemeContext } from "./context/ThemeContext";
import { useSignIn } from "./hooks/signIn.hook";
import { MainPage } from "./pages/MainPage/MainPage";
import { SignInPage } from "./pages/SignInPage/SignInPage";

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

  const { login, logout, token, userId, isReady } = useSignIn();
  const isLogin = !!token;

  return (
    <BrowserRouter>
      <SignInContext.Provider
        value={{ login, logout, token, userId, isReady, isLogin }}
      >
        <div className={styles.app} data-theme={theme}>
          <Routes>
            <Route path="/*" element={<MainPage switchTheme={switchTheme} />} />
            <Route
              path="/signin"
              element={
                isLogin ? <Navigate to="/profile" replace /> : <SignInPage />
              }
            />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </div>
      </SignInContext.Provider>
    </BrowserRouter>
  );
};
