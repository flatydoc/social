import React from "react";
import classes from "./Post.module.scss";

export const Post = (props) => {
  return (
    <div className={classes.post}>
      <h2>{props.message}</h2>
    </div>
  );
};
