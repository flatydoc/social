import React from "react";
import { ChatListContainer } from "./ChatList/ChatListContainer";
import { ChatMessagesContainer } from "./ChatMessages/ChatMessagesContainer";
import styles from "./messanger.module.scss";

export const Messanger = () => {
  return (
    <section className={styles.messanger}>
      <h2 className="visually-hidden">Messanger</h2>
      <ChatListContainer />
      <ChatMessagesContainer />
    </section>
  );
};
