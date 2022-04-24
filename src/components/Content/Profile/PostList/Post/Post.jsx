import React from "react";
import styles from "./post.module.scss";

export const Post = (props) => {
  return (
    <div className={styles.post}>
      <p>{props.text}</p>
      <p>{props.likesCount}</p>
    </div>
  );
};
