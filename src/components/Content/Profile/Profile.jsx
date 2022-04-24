import React from "react";
import styles from "./profile.module.scss";
import { PostList } from "./PostList/PostList";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo />
      <PostList postData={props.profile.postData} dispatch={props.dispatch} />
    </div>
  );
};
