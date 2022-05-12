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
        like: false,
        likesCount: 0,
      };
      return {
        ...state,
        newPostText: "",
        postData: [newPost, ...state.postData],
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
    // case LIKE_POST: {
    //   let stateCopy = {
    //     ...state,
    //     postData: [...state.postData],
    //   };
    //   stateCopy.postData.forEach((post) =>
    //     post.id === action.id
    //       ? (post.likesCount = post.likesCount + 1)
    //       : post.likesCount
    //   );
    //   return stateCopy;
    // }
    case LIKE_POST:
      return {
        ...state,
        postData: state.postData.map((post) => {
          if (post.id === action.id && post.like === false) {
            return { ...post, likesCount: action.likesCount + 1, like: true };
          } else if (post.id === action.id && post.like === true) {
            return { ...post, likesCount: action.likesCount - 1, like: false };
          }
          return post;
        }),
      };
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

export const addPostAC = () => ({
  type: ADD_POST,
});

export const pinPostAC = (id) => ({
  type: PIN_POST,
  id: id,
});

export const likePostAC = (likesCount, id) => ({
  type: LIKE_POST,
  likesCount: likesCount,
  id: id,
});

export const deletePostAC = (id) => ({
  type: DELETE_POST,
  id: id,
});

export const changePostTextAC = (text) => ({
  type: CHANGE_POST_TEXT,
  newText: text,
});

export const cleanPostTextAC = () => ({
  type: CLEAN_POST_TEXT,
});
