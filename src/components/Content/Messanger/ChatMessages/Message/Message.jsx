import React from "react";
import styles from "./message.module.scss";

export const Message = (props) => {
  return (
    <div className={styles.message}>
      <h3>{props.message}</h3>
    </div>
  );
};
