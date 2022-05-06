import { connect } from "react-redux";
import {
  sendMessageAC,
  changeMessageTextAC,
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
      dispatch(sendMessageAC());
    },
    newMessageText: (text) => {
      dispatch(changeMessageTextAC(text));
    },
  };
};

export const ChatMessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatMessages);
