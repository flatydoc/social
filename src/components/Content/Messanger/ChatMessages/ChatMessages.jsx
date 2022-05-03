import React from "react";
import styles from "./chatMessages.module.scss";
import { Message } from "./Message/Message";

export const ChatMessages = (props) => {
  let chatMessagesElements = props.chatMessage.chatMessagesData.map(
    (message, index) => (
      <Message key={index} id={message.id} message={message.message} />
    )
  );

  let sendMessageText = React.createRef();

  let sendMessage = () => {
    props.sendMessage();
  };

  let newMessageText = () => {
    let text = sendMessageText.current.value;
    props.newMessageText(text);
  };

  return (
    <div className={styles.chatMessages}>
      <h3>Chat Messages</h3>
      <textarea
        onChange={newMessageText}
        ref={sendMessageText}
        className={styles.sendMessageText}
        value={props.chatMessage.newMessageText}
      />
      <button onClick={sendMessage} className={styles.sendMessageBtn}>
        Send Message
      </button>
      <div>{chatMessagesElements}</div>
    </div>
  );
};
