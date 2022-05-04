const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";

let initialState = {
  chatListData: [
    { id: 0, name: "Greg", value: 1 },
    { id: 1, name: "Denis", value: 0 },
    { id: 2, name: "Vlad", value: 0 },
    { id: 3, name: "Oleg", value: 0 },
    { id: 4, name: "Alex", value: 0 },
  ],

  chatMessagesData: [],

  newMessageText: "",
};

export const messangerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: state.chatMessagesData.forEach((item, i) => (item.id = i + 1)),
        message: state.newMessageText,
      };
      return {
        ...state,
        newMessageText: "",
        chatMessagesData: [...state.chatMessagesData, newMessage],
      };

    case CHANGE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    default:
      return state;
  }
};
export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});

export const changeMessageTextActionCreator = (text) => ({
  type: CHANGE_MESSAGE_TEXT,
  newText: text,
});
