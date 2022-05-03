import { combineReducers, createStore } from "redux";
import { messangerReducer } from "./messangerReducer";
import { profileReducer } from "./profileReducer";

let reducers = combineReducers({
  profile: profileReducer,
  messanger: messangerReducer,
});

export let store = createStore(reducers);
window.store = store;
