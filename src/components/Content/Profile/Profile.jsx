import React from "react";
import styles from "./profile.module.scss";
import { PostList } from "./PostList/PostList";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
  return (
    <section className={styles.profile}>
      <h2 className="visually-hidden">Profile</h2>
      <ProfileInfo />
      <PostList postList={props.profile} dispatch={props.dispatch} />
    </section>
  );
};
