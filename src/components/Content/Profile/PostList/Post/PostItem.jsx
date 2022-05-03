import React from "react";
import { Post } from "./Post";

export const PostItem = (props) => {
  let deletePost = (id) => {
    props.deletePost(id);
  };
  let pinPost = (id) => {
    props.pinPost(id);
  };
  let postElements = props.profile.postData.map((post, index) => (
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
