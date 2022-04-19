import React from "react";
import styles from "./profile.module.scss";
import { Posts } from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <h2>Profile</h2>
      <ProfileInfo />
      <Posts />
    </div>
  );
};
