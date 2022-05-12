import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { messangerReducer } from "./messangerReducer";
import { profileReducer } from "./profileReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
  profile: profileReducer,
  messanger: messangerReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
const middleware = composeEnhancer(applyMiddleware(thunk));

export let store = createStore(reducers, middleware);
window.store = store;
