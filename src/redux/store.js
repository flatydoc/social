const ADD_POST = "ADD-POST";
const SEND_MESSAGE = "SEND-MESSAGE";

export let store = {
  _state: {
    countMessage() {
      return this._state.messanger.chatMessagesData.length;
    },

    messanger: {
      chatListData: [
        { id: 1, name: "Greg", value: 1 },
        { id: 2, name: "Denis", value: 0 },
        { id: 3, name: "Vlad", value: 0 },
        { id: 4, name: "Oleg", value: 0 },
        { id: 5, name: "Alex", value: 0 },
      ],

      chatMessagesData: [
        { id: 1, message: "hi" },
        { id: 2, message: "ty" },
      ],
    },

    profile: {
      postData: [
        { id: 1, text: "gdgfdgdfg", likesCount: 65 },
        { id: 2, text: "hrgjytjh", likesCount: 44 },
        { id: 3, text: "rtgrtg", likesCount: 32 },
        { id: 4, text: "rthrthrt", likesCount: 45 },
        { id: 5, text: "rthrthr", likesCount: 12 },
      ],
    },
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 6,
        text: action.text,
        likesCount: 0,
      };

      this._state.profile.postData.push(newPost);
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 3,
        message: action.text,
      };

      this._state.messanger.chatMessagesData.push(newMessage);
      this._callSubscriber(this._state);
    }
  },
};

export const sendMessageActionCreator = (text) => ({
  type: SEND_MESSAGE,
  text: text,
});

export const addPostActionCreator = (text) => ({
  type: ADD_POST,
  text: text,
});
