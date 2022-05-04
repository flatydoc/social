const ADD_POST = "ADD-POST";
const PIN_POST = "PIN-POST";
const LIKE_POST = "LIKE-POST";
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
      return {
        ...state,
        newPostText: "",
        postData: [...state.postData, newPost],
      };
    }
    case DELETE_POST: {
      let stateCopy = {
        ...state,
        postData: [...state.postData],
      };
      let i = stateCopy.postData.findIndex((item) => item.id === action.id);
      stateCopy.postData.splice(i, 1);
      return stateCopy;
    }
    case PIN_POST: {
      let stateCopy = {
        ...state,
        postData: [...state.postData],
      };
      let i = stateCopy.postData.findIndex((item) => item.id === action.id);
      stateCopy.postData.splice(0, 0, stateCopy.postData.splice(i, 1)[0]);
      return stateCopy;
    }
    case LIKE_POST: {
      let stateCopy = {
        ...state,
        postData: [...state.postData],
      };
      stateCopy.postData.forEach((post) =>
        post.id === action.id
          ? (post.likesCount = post.likesCount + 1)
          : post.likesCount
      );
      return stateCopy;
    }
    case CHANGE_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case CLEAN_POST_TEXT: {
      return {
        ...state,
        newPostText: "",
      };
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

export const likePostActionCreator = (likesCount, id) => ({
  type: LIKE_POST,
  likesCount: likesCount,
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
