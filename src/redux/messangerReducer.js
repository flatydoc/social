const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";

export const MessangerReducer = (state, action) => {
  if (action.type === SEND_MESSAGE) {
    let newMessage = {
      id: state.chatMessagesData.forEach((item, i) => (item.id = i + 1)),
      message: state.newMessageText,
    };
    state.chatMessagesData.push(newMessage);
    state.newMessageText = "";
  } else if (action.type === CHANGE_MESSAGE_TEXT) {
    state.newMessageText = action.newText;
  }

  return state;
};
