import React from "react";
import styles from "./postList.module.scss";
import { Post } from "./Post/Post";
import {
  addPostActionCreator,
  changePostTextActionCreator,
  cleanPostTextActionCreator,
} from "../../../../redux/store";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

export const PostList = (props) => {
  let postElements = props.postList.postData.map((post, index) => (
    <Post
      key={index}
      id={post.id}
      text={post.text}
      likesCount={post.likesCount}
      dispatch={props.dispatch}
    />
  ));

  let addPostText = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let newPostText = () => {
    let text = addPostText.current.value;
    props.dispatch(changePostTextActionCreator(text));
  };

  let cleanPostText = () => {
    props.dispatch(cleanPostTextActionCreator());
  };

  return (
    <div className={styles.postList}>
      <div className={styles.addPost}>
        <InputTextarea
          onChange={newPostText}
          ref={addPostText}
          value={props.postList.newPostText}
          className={styles.addPostText}
          placeholder="Anything new?"
          autoResize
        />
        <Button
          onClick={cleanPostText}
          className={styles.postBtn}
          icon="pi pi-trash"
        />
        <Button
          onClick={addPost}
          className={styles.addPostBtn}
          label="Publish"
        />
      </div>
      <div>{postElements}</div>
    </div>
  );
};
