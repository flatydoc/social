import React from "react";
import styles from "./chatMessages.module.scss";
import { Message } from "./Message/Message";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

export const ChatMessages = (props) => {
  let chatMessagesElements = props.messanger.chatMessagesData.map(
    (message, index) => (
      <Message key={index} id={message.id} message={message.message} />
    )
  );

  let messagesCount = props.messanger.chatMessagesData.length;
  if (messagesCount === 0) {
    document.title = "Social";
  } else {
    document.title = `Social (${messagesCount})`;
  }

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
      <div className={styles.messagesArea}>{chatMessagesElements}</div>
      <div className={styles.sendMessage}>
        <InputTextarea
          onChange={newMessageText}
          ref={sendMessageText}
          className={styles.sendMessageText}
          value={props.messanger.newMessageText}
          placeholder="Enter message"
          autoResize
        />
        <Button
          onClick={sendMessage}
          icon="pi pi-send"
          aria-label="Send message"
          className={styles.sendMessageBtn}
        />
      </div>
    </div>
  );
};
