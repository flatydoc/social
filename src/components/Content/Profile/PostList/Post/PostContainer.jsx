import React from "react";
import {
  deletePostActionCreator,
  pinPostActionCreator,
} from "../../../../../redux/profileReducer";
import { Post } from "./Post";

export const PostContainer = (props) => {
  let deletePost = (id) => {
    props.dispatch(deletePostActionCreator(id));
  };
  let pinPost = (id) => {
    props.dispatch(pinPostActionCreator(id));
  };
  let postElements = props.post.postData.map((post, index) => (
    <Post
      key={index}
      id={post.id}
      text={post.text}
      likesCount={post.likesCount}
      deletePost={deletePost}
      pinPost={pinPost}
    />
  ));

  return <div>{postElements}</div>;
};
