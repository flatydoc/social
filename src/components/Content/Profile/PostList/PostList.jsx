import React, { useCallback, useContext, useEffect, useState } from "react";
import { SignInContext } from "../../../../context/SignInContext";
import axios from "axios";
import styles from "./postList.module.scss";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { config } from "../../../../config";
import { Post } from "./Post/Post";

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
    if (!userId) return null;
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

  const cleanPostText = () => {
    setText("");
  };

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const tags = [];

  const addTag = () => {
    let newTag = text.split(" ").filter((el) => el.includes("#"));

    console.log(newTag);
    tags.push.apply(tags, newTag);
    return tags;
  };

  console.log(tags);

  // let tagsText = text
  //   .split(" ")
  //   .filter((el) => el.includes("#"))
  //   .join(", ");

  // const createTags = () => {
  //   let newTag = {
  //     text: tagsText,
  //   };
  //   tags.push(newTag);
  // };

  let postElements = posts.map((post, index) => (
    <Post
      key={index}
      id={post._id}
      text={post.text}
      like={post.like}
      likePost={likePost}
      likesCount={post.likesCount}
      removePost={removePost}
    />
  ));

  return (
    <div className={styles.postList}>
      <div>{addTag()}</div>
      <form onSubmit={(e) => e.preventDefault()} className={styles.addPost}>
        <InputTextarea
          onChange={changeHandler}
          value={text}
          className={styles.addPostText}
          placeholder="Anything new?"
          autoResize
        />
        <Button
          onClick={cleanPostText}
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
      {/* {posts.map((post, index) => {
        return (
          <div key={index} className={styles.post}>
            <div className={styles.postText}>{post.text}</div>
            <Button
              className={styles.postOptionsBtn}
              icon="pi pi-ellipsis-h"
              onClick={(event) => menu.current.toggle(event)}
              aria-label="Options"
            />
            <Menu model={items} popup ref={menu} />
            <div className={styles.commentText}></div>
            <div className={styles.likePost}>
              <button
                aria-label="Like post"
                onClick={() => likePost(post._id)}
                className={`${
                  post.like === false ? PrimeIcons.HEART : PrimeIcons.HEART_FILL
                } pr-3`}
                style={{ color: "red", fontSize: "2em" }}
              ></button>
              <p>{post.likesCount}</p>
            </div>
            <ConfirmDialog
              visible={visible}
              onHide={() => setVisible(false)}
              header="Delete ?"
              message="Are you sure you want to delete the post?"
              icon="pi pi-trash"
              accept={() => removePost(post._id)}
            />
          </div>
        );
      })} */}
      {postElements}
    </div>
  );
};
