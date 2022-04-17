import React from "react";
import { Posts } from "./Posts/Posts";
import classes from "./Profile.module.scss";

export const Profile = () => {
  return (
    <div className={classes.profile}>
      <h2>Profile</h2>
      <Posts />
    </div>
  );
};
