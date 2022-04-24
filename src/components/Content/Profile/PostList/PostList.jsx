import React from "react";
import styles from "./postList.module.scss";
import { Post } from "./Post/Post";
import { addPostActionCreator } from "../../../../redux/store";

export const PostList = (props) => {
  let postElements = props.postData.map((post, id) => (
    <Post key={id} id={post.id} text={post.text} likesCount={post.likesCount} />
  ));

  let addPostText = React.createRef();

  let addPost = () => {
    let text = addPostText.current.value;
    props.dispatch(addPostActionCreator(text));
  };

  return (
    <div className={styles.postList}>
      <h2>PostList</h2>
      <textarea ref={addPostText} className={styles.addPostText} />
      <button onClick={addPost} className={styles.addPostBtn}>
        Add post
      </button>
      <div>{postElements}</div>
    </div>
  );
};
