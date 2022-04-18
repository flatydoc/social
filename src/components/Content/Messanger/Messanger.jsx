import React from "react";
import { ChatList } from "./ChatList/ChatList";
import { ChatMessages } from "./ChatMessages/ChatMessages";
import classes from "./Messanger.module.scss";

export const Messanger = () => {
  return (
    <div className={classes.messanger}>
      <ChatList />
      <ChatMessages />
    </div>
  );
};
