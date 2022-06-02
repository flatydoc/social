import React from "react";
import { PostList } from "./PostList/PostList";
import styles from "./profile.module.scss";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
  return (
    <section className={styles.profile}>
      <h2 className="visually-hidden">Profile</h2>
      <ProfileInfo />
      <PostList />
    </section>
  );
};
