import React from "react";
import styles from "./post.module.scss";

export const Post = (props) => {
  return (
    <div className={styles.post}>
      <h2>{props.message}</h2>
    </div>
  );
};
