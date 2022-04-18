import React from "react";
import classes from "./Message.module.scss";

export const Message = (props) => {
  return (
    <div className={classes.message}>
      <h3>{props.message}</h3>
    </div>
  );
};
