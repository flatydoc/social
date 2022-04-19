import React from "react";
import styles from "./posts.module.scss";
import { Post } from "./Post/Post";

export const Posts = () => {
  return (
    <div className={styles.posts}>
      <h2>Posts</h2>
      <Post message="first post" />
      <Post message="second post" />
      <Post message="third post" />
    </div>
  );
};
