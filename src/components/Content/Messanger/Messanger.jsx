import React from "react";
import { ChatList } from "./ChatList/ChatList";
import { ChatMessagesContainer } from "./ChatMessages/ChatMessagesContainer";
import styles from "./messanger.module.scss";

export const Messanger = (props) => {
  return (
    <section className={styles.messanger}>
      <h2>Messanger</h2>
      <ChatList chatList={props.messanger} />
      <ChatMessagesContainer
        chatMessage={props.messanger}
        dispatch={props.dispatch}
      />
    </section>
  );
};
