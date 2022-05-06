import { connect } from "react-redux";
import {
  deletePostAC,
  likePostAC,
  pinPostAC,
} from "../../../../../redux/profileReducer";

import { PostItems } from "./PostItems";

let mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePostAC(id));
    },
    pinPost: (id) => {
      dispatch(pinPostAC(id));
    },
    likePost: (likesCount, id) => {
      dispatch(likePostAC(likesCount, id));
    },
  };
};

export const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItems);
