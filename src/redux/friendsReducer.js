const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";

let initialState = {
  friendsData: [{ id: 0, name: "Greg", value: 1 }],

  chatMessagesData: [],

  newMessageText: "",
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export const sendMessageAC = () => ({
  type: SEND_MESSAGE,
});

export const changeMessageTextAC = (text) => ({
  type: CHANGE_MESSAGE_TEXT,
  newText: text,
});
