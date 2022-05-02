const ADD_POST = "ADD-POST";
const PIN_POST = "PIN-POST";
const DELETE_POST = "DELETE-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const CLEAN_POST_TEXT = "CLEAN-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";

export let store = {
  _state: {
    messanger: {
      chatListData: [
        { id: 0, name: "Greg", value: 1 },
        { id: 1, name: "Denis", value: 0 },
        { id: 2, name: "Vlad", value: 0 },
        { id: 3, name: "Oleg", value: 0 },
        { id: 4, name: "Alex", value: 0 },
      ],

      chatMessagesData: [],

      newMessageText: "",
    },

    profile: {
      postData: [],

      newPostText: "",
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
        id: this._state.profile.postData.forEach(
          (item, i) => (item.id = i + 1)
        ),
        text: this._state.profile.newPostText,
        likesCount: 0,
      };

      this._state.profile.postData.push(newPost);
      this._state.profile.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === DELETE_POST) {
      let i = this._state.profile.postData.findIndex(
        (item) => item.id === action.id
      );
      this._state.profile.postData.splice(i, 1);
      this._callSubscriber(this._state);
    } else if (action.type === PIN_POST) {
      console.log("pin");
      this._callSubscriber(this._state);
    } else if (action.type === CHANGE_POST_TEXT) {
      this._state.profile.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === CLEAN_POST_TEXT) {
      this._state.profile.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: this._state.messanger.chatMessagesData.forEach(
          (item, i) => (item.id = i + 1)
        ),
        message: this._state.messanger.newMessageText,
      };
      this._state.messanger.chatMessagesData.push(newMessage);
      this._state.messanger.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === CHANGE_MESSAGE_TEXT) {
      this._state.messanger.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const pinPostActionCreator = (id) => ({
  type: PIN_POST,
  id: id,
});

export const deletePostActionCreator = (id) => ({
  type: DELETE_POST,
  id: id,
});

export const changePostTextActionCreator = (text) => ({
  type: CHANGE_POST_TEXT,
  newText: text,
});

export const cleanPostTextActionCreator = () => ({
  type: CLEAN_POST_TEXT,
});

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});

export const changeMessageTextActionCreator = (text) => ({
  type: CHANGE_MESSAGE_TEXT,
  newText: text,
});

window.store = store;
