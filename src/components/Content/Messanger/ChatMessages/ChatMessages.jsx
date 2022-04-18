import React from "react";
import classes from "./ChatMessages.module.scss";
import { Message } from "./Message/Message";

export const ChatMessages = () => {
  return (
    <div className={classes.chatMessages}>
      <Message message="hi" />
    </div>
  );
};
