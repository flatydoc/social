import React from "react";
import styles from "./message.module.scss";

export const Message = (props) => {
  return (
    <div>
      <span className={styles.message}>{props.message}</span>
    </div>
  );
};
