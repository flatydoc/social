import React from "react";
import {
  sendMessageActionCreator,
  changeMessageTextActionCreator,
} from "../../../../redux/messangerReducer";
import { ChatMessages } from "./ChatMessages";

export const ChatMessagesContainer = (props) => {
  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  let newMessageText = (text) => {
    props.dispatch(changeMessageTextActionCreator(text));
  };

  return (
    <ChatMessages
      sendMessage={sendMessage}
      newMessageText={newMessageText}
      chatMessage={props.chatMessage}
    />
  );
};
