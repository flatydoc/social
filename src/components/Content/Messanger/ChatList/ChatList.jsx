import React from "react";
import { ChatItem } from "./ChatItem/ChatItem";
import classes from "./ChatList.module.scss";

export const ChatList = () => {
  let chatListData = [
    { id: 1, name: "Victor" },
    { id: 2, name: "Dimon" },
    { id: 3, name: "Vlad" },
    { id: 4, name: "Gena" },
    { id: 5, name: "Gena" },
    { id: 6, name: "Gena" },
    { id: 7, name: "Gena" },
    { id: 8, name: "Gena" },
    { id: 9, name: "Gena" },
  ];

  let chatListElements = chatListData.map((chat, id) => (
    <ChatItem key={id} name={chat.name} id={chat.id} />
  ));

  return (
    <div className={classes.chatList}>
      <h3>Chat List</h3>
      {chatListElements}
    </div>
  );
};
