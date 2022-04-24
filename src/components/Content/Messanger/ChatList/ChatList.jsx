import React from "react";
import { ChatItem } from "./ChatItem/ChatItem";
import styles from "./chatList.module.scss";

export const ChatList = (props) => {
  let messagesCount = props.chatMessagesData.length;

  let chatListElements = props.chatListData.map((chat, id) => (
    <ChatItem key={id} id={chat.id} name={chat.name} value={messagesCount} />
  ));

  return (
    <div className={styles.chatList}>
      <h3>Chat List</h3>
      <div>{chatListElements}</div>
    </div>
  );
};
