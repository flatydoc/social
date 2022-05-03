import React from "react";
import { PostListContainer } from "./PostList/PostListContainer";
import styles from "./profile.module.scss";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
  return (
    <section className={styles.profile}>
      <h2 className="visually-hidden">Profile</h2>
      <ProfileInfo />
      <PostListContainer />
    </section>
  );
};
