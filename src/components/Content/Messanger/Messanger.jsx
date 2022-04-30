import React from "react";
import { ChatList } from "./ChatList/ChatList";
import { ChatMessages } from "./ChatMessages/ChatMessages";
import styles from "./messanger.module.scss";

export const Messanger = (props) => {
  return (
    <section className={styles.messanger}>
      <h2>Messanger</h2>
      <ChatList
        chatListData={props.messanger.chatListData}
        chatMessagesData={props.messanger.chatMessagesData}
      />
      <ChatMessages
        chatMessagesData={props.messanger.chatMessagesData}
        dispatch={props.dispatch}
      />
    </section>
  );
};
