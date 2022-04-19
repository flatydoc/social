import React from "react";
import styles from "./chatMessages.module.scss";
import { Message } from "./Message/Message";

export const ChatMessages = () => {
  let chatMessagesData = [
    { id: 1, message: "hi" },
    { id: 2, message: "ty" },
    { id: 3, message: "yt" },
    { id: 4, message: "iu" },
    { id: 5, message: "oi" },
    { id: 6, message: "er" },
    { id: 7, message: "gh" },
    { id: 8, message: "jh" },
    { id: 9, message: "kj" },
  ];

  let chatMessagesElements = chatMessagesData.map((message, id) => (
    <Message key={id} message={message.message} id={message.id} />
  ));
  return (
    <div className={styles.chatMessages}>
      <h3>Chat Messages</h3>
      {chatMessagesElements}
    </div>
  );
};
