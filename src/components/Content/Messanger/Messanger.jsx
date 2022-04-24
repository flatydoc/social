import React from "react";
import { ChatList } from "./ChatList/ChatList";
import { ChatMessages } from "./ChatMessages/ChatMessages";
import styles from "./messanger.module.scss";

export const Messanger = (props) => {
  return (
    <div className={styles.messanger}>
      <ChatList
        chatListData={props.messanger.chatListData}
        chatMessagesData={props.messanger.chatMessagesData}
      />
      <ChatMessages
        chatMessagesData={props.messanger.chatMessagesData}
        dispatch={props.dispatch}
      />
    </div>
  );
};
