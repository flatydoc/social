import React from "react";
import { ChatListContainer } from "./ChatList/ChatListContainer";
import { ChatMessagesContainer } from "./ChatMessages/ChatMessagesContainer";
import styles from "./messanger.module.scss";

export const Messanger = (props) => {
  return (
    <section className={styles.messanger}>
      <h2>Messanger</h2>
      <ChatListContainer />
      <ChatMessagesContainer />
    </section>
  );
};
