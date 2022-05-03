import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  changeMessageTextActionCreator,
} from "../../../../redux/messangerReducer";
import { ChatMessages } from "./ChatMessages";

let mapStateToProps = (state) => {
  return {
    messanger: state.messanger,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    newMessageText: (text) => {
      dispatch(changeMessageTextActionCreator(text));
    },
  };
};

export const ChatMessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatMessages);
