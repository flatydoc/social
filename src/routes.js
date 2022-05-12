import React from "react";
import { Route } from "react-router-dom";
import { Profile } from "./components/Content/Profile/Profile";
import { SignInPage } from "./pages/SignInPage/SignInPage";

export const useRoutes = (isLogin) => {
  if (isLogin) {
    return <Route path="/profile" exact element={<Profile />} />;
  }

  return <Route path="/signin" exact element={<SignInPage />} />;
};
