import React from "react";
import { Post } from "./Post/Post";
import classes from "./Posts.module.scss";

export const Posts = () => {
  return (
    <div className={classes.posts}>
      <h2>Posts</h2>
      <Post message="first post" />
      <Post message="second post" />
      <Post message="third post" />
      <Post />
    </div>
  );
};
