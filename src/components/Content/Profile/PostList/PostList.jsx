import React, { useCallback, useContext, useEffect, useState } from "react";
import { SignInContext } from "../../../../context/SignInContext";
import axios from "axios";
import styles from "./postList.module.scss";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
//import { PostContainer } from "./Post/PostContainer";
import { config } from "../../../../config";

export const PostList = () => {
  const [text, setText] = useState("");
  const { userId } = useContext(SignInContext);
  const [posts, setPosts] = useState([]);

  const getPost = useCallback(async () => {
    try {
      await axios
        .get(`${config.apiUrl}/api`, {
          headers: {
            "Content-Type": "application/json",
          },
          params: { userId },
        })
        .then((res) => setPosts(res.data));
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  const createPost = async () => {
    if (!text) return null;
    try {
      await axios
        .post(
          `${config.apiUrl}/api/post`,
          { text, userId },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          setPosts([...posts], res.data);
          setText("");
          getPost();
        });
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = async (id) => {
    try {
      await axios
        .delete(
          `${config.apiUrl}/api/delete/${id}`,
          { id },
          { headers: { "Content-Type": "application/json" } }
        )
        .then(() => getPost());
    } catch (error) {
      console.log(error);
    }
  };

  const likePost = async (id) => {
    try {
      await axios
        .put(
          `${config.apiUrl}/api/like/${id}`,
          { id },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          setPosts([...posts], res.data);
          getPost();
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.postList}>
      <form onSubmit={(e) => e.preventDefault()} className={styles.addPost}>
        <InputTextarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          className={styles.addPostText}
          placeholder="Anything new?"
          autoResize
        />
        <Button
          className={styles.postBtn}
          icon="pi pi-trash"
          aria-label="Clean post text"
        />
        <Button
          onClick={createPost}
          className={styles.addPostBtn}
          label="Publish"
        />
      </form>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <div>{index + 1}</div>
            <div>{post.text}</div>
            <Button
              onClick={() => removePost(post._id)}
              className={styles.addPostBtn}
              label="Delete"
            />
            <Button
              onClick={() => likePost(post._id)}
              className={styles.addPostBtn}
              label="Like"
            />
          </div>
        );
      })}
    </div>
  );

  // let addPostText = React.createRef();
  // let addPost = () => {
  //   props.addPost();
  // };
  // let newPostText = () => {
  //   let text = addPostText.current.value;
  //   props.newPostText(text);
  // };
  // let cleanPostText = () => {
  //   props.cleanPostText();
  // };
  // return (
  //   <div className={styles.postList}>
  //     <div className={styles.addPost}>
  //       <InputTextarea
  //         onChange={newPostText}
  //         ref={addPostText}
  //         value={props.profile.newPostText}
  //         className={styles.addPostText}
  //         placeholder="Anything new?"
  //         autoResize
  //       />
  //       <Button
  //         onClick={cleanPostText}
  //         className={styles.postBtn}
  //         icon="pi pi-trash"
  //         aria-label="Clean post text"
  //       />
  //       <Button
  //         onClick={addPost}
  //         className={styles.addPostBtn}
  //         label="Publish"
  //       />
  //     </div>
  //     <PostContainer />
  //   </div>
  // );
};
