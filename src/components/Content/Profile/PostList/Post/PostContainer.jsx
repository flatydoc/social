import { connect } from "react-redux";
import {
  deletePostActionCreator,
  pinPostActionCreator,
} from "../../../../../redux/profileReducer";
import { PostItem } from "./PostItem";

let mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePostActionCreator(id));
    },
    pinPost: (id) => {
      dispatch(pinPostActionCreator(id));
    },
  };
};

export const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem);
