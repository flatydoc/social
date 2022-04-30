import React from "react";
import styles from "./chatMessages.module.scss";
import { Message } from "./Message/Message";
import { sendMessageActionCreator } from "../../../../redux/store";

export const ChatMessages = (props) => {
  let chatMessagesElements = props.chatMessagesData.map((message, index) => (
    <Message key={index} id={message.id} message={message.message} />
  ));

  let sendMessageText = React.createRef();

  let sendMessage = () => {
    let text = sendMessageText.current.value;
    props.dispatch(sendMessageActionCreator(text));
    sendMessageText.current.value = "";
  };

  return (
    <div className={styles.chatMessages}>
      <h3>Chat Messages</h3>
      <textarea ref={sendMessageText} className={styles.sendMessageText} />
      <button onClick={sendMessage} className={styles.sendMessageBtn}>
        Send Message
      </button>
      <div>{chatMessagesElements}</div>
    </div>
  );
};
