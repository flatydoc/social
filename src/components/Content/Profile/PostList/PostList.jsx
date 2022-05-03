import React from "react";
import styles from "./postList.module.scss";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { PostContainer } from "./Post/PostContainer";

export const PostList = (props) => {
  let addPostText = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let newPostText = () => {
    let text = addPostText.current.value;
    props.newPostText(text);
  };

  let cleanPostText = () => {
    props.cleanPostText();
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
      <PostContainer post={props.postList} dispatch={props.dispatch} />
    </div>
  );
};
