import React from "react";
import { ChatList } from "./ChatList/ChatList";
import { ChatMessages } from "./ChatMessages/ChatMessages";
import styles from "./messanger.module.scss";

export const Messanger = () => {
  return (
    <div className={styles.messanger}>
      <ChatList />
      <ChatMessages />
    </div>
  );
};
