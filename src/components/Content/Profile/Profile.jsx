import React from "react";
import { Posts } from "./Posts/Posts";
import classes from "./Profile.module.scss";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
  return (
    <div className={classes.profile}>
      <h2>Profile</h2>
      <ProfileInfo />
      <Posts />
    </div>
  );
};
