import React from "react";
import {
  addPostActionCreator,
  changePostTextActionCreator,
  cleanPostTextActionCreator,
} from "../../../../redux/profileReducer";
import { PostList } from "./PostList";

export const PostListContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let newPostText = (text) => {
    props.dispatch(changePostTextActionCreator(text));
  };

  let cleanPostText = () => {
    props.dispatch(cleanPostTextActionCreator());
  };

  return (
    <PostList
      newPostText={newPostText}
      addPost={addPost}
      cleanPostText={cleanPostText}
      postList={props.postList}
      dispatch={props.dispatch}
    />
  );
};
