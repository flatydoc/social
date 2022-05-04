import React, { useRef, useState } from "react";
import styles from "./post.module.scss";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";

export const Post = (props) => {
  let deletePost = () => {
    props.deletePost(props.id);
  };
  let pinPost = () => {
    props.pinPost(props.id);
  };
  let likePost = () => {
    props.likePost(props.likesCount, props.id);
  };

  let items = [
    {
      label: "Pin",
      icon: "pi pi-paperclip",
      command: () => {
        pinPost();
      },
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      command: () => {
        setVisible(true);
      },
    },
  ];

  const menu = useRef(null);
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.post}>
      <div className={styles.postText}>{props.text}</div>
      <Button
        className={styles.postOptionsBtn}
        icon="pi pi-ellipsis-h"
        onClick={(event) => menu.current.toggle(event)}
      />
      <Menu model={items} popup ref={menu} />
      <div className={styles.commentText}></div>
      <div className={styles.likePost}>
        {/* <Button
          onClick={likePost}
          icon="pi pi-heart"
          className="p-button-rounded p-button-help p-button-text"
          aria-label="Favorite"
        /> */}
        <button onClick={likePost} className={styles.likePostBtn}>
          <i
            className="pi pi-heart"
            style={{ color: "red", fontSize: "2em" }}
          ></i>
        </button>
        <p>{props.likesCount}</p>
      </div>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        header="Delete ?"
        message="Are you sure you want to delete the post?"
        icon="pi pi-trash"
        accept={deletePost}
      />
    </div>
  );
};
