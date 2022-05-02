const ADD_POST = "ADD-POST";
const PIN_POST = "PIN-POST";
const DELETE_POST = "DELETE-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const CLEAN_POST_TEXT = "CLEAN-POST-TEXT";

export const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: state.postData.forEach((item, i) => (item.id = i + 1)),
      text: state.newPostText,
      likesCount: 0,
    };

    state.postData.push(newPost);
    state.newPostText = "";
  } else if (action.type === DELETE_POST) {
    let i = state.postData.findIndex((item) => item.id === action.id);
    state.postData.splice(i, 1);
  } else if (action.type === PIN_POST) {
    console.log("pin");
  } else if (action.type === CHANGE_POST_TEXT) {
    state.newPostText = action.newText;
  } else if (action.type === CLEAN_POST_TEXT) {
    state.newPostText = "";
  }

  return state;
};
