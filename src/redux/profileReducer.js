const ADD_POST = "ADD-POST";
const PIN_POST = "PIN-POST";
const DELETE_POST = "DELETE-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const CLEAN_POST_TEXT = "CLEAN-POST-TEXT";

let initialState = {
  postData: [],
  newPostText: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.postData.forEach((item, i) => (item.id = i + 1)),
        text: state.newPostText,
        likesCount: 0,
      };
      let stateCopy = { ...state };

      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case DELETE_POST: {
      let stateCopy = { ...state };
      let i = stateCopy.postData.findIndex((item) => item.id === action.id);
      stateCopy.postData.splice(i, 1);
      return state;
    }
    case PIN_POST: {
      let stateCopy = { ...state };
      console.log("pin");
      return stateCopy;
    }
    case CHANGE_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case CLEAN_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = "";
      return stateCopy;
    }
    default:
      return state;
  }
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
