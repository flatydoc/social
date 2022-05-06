const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";
const SET_CHAT_LIST = "SET-CHAT-LIST";

let initialState = {
  chatListData: [
    {
      id: 0,
      name: "Greg",
      avatarUrl:
        "https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-Black-Widow-icon.png",
      value: 1,
    },
    {
      id: 1,
      name: "Denis",
      avatarUrl:
        "https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-Nick-Fury-icon.png",
      value: 0,
    },
    {
      id: 2,
      name: "Vlad",
      avatarUrl:
        "https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-Captain-America-icon.png",
      value: 0,
    },
    {
      id: 3,
      name: "Oleg",
      avatarUrl:
        "https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-Iron-Man-icon.png",
      value: 0,
    },
    {
      id: 4,
      name: "Alex",
      avatarUrl:
        "https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/128/Avengers-Loki-icon.png",
      value: 0,
    },
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
    case SET_CHAT_LIST:
      return {
        ...state,
        chatListData: [...state.chatListData, ...action.chatListData],
      };
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

export const setChatListAC = (chatListData) => ({
  type: SET_CHAT_LIST,
});
