import { messangerReducer } from "./messangerReducer";
import { profileReducer } from "./profileReducer";

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
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.messanger = messangerReducer(this._state.messanger, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;
