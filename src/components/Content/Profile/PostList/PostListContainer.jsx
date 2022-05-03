import { connect } from "react-redux";
import {
  addPostActionCreator,
  changePostTextActionCreator,
  cleanPostTextActionCreator,
} from "../../../../redux/profileReducer";
import { PostList } from "./PostList";

let mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    newPostText: (text) => {
      dispatch(changePostTextActionCreator(text));
    },
    cleanPostText: () => {
      dispatch(cleanPostTextActionCreator());
    },
  };
};

export const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
