import { connect } from "react-redux";
import {
  addPostAC,
  changePostTextAC,
  cleanPostTextAC,
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
      dispatch(addPostAC());
    },
    newPostText: (text) => {
      dispatch(changePostTextAC(text));
    },
    cleanPostText: () => {
      dispatch(cleanPostTextAC());
    },
  };
};

export const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
