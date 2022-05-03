import React from "react";
import { ChatItem } from "./ChatItem/ChatItem";
import styles from "./chatList.module.scss";

export const ChatList = (props) => {
  let messagesCount = props.chatList.chatMessagesData.length;

  let chatListElements = props.chatList.chatListData.map((chat, index) => (
    <ChatItem key={index} id={chat.id} name={chat.name} value={messagesCount} />
  ));

  return (
    <div className={styles.chatList}>
      <div>{chatListElements}</div>
    </div>
  );
};
