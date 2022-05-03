import { connect } from "react-redux";
import { ChatList } from "./ChatList";

let mapStateToProps = (state) => {
  return {
    messanger: state.messanger,
  };
};

export const ChatListContainer = connect(mapStateToProps)(ChatList);
