import React, { useRef, useState } from "react";
import styles from "./post.module.scss";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";
import { ToggleButton } from "primereact/togglebutton";

export const Post = (props) => {
  let deletePost = () => {
    props.deletePost(props.id);
  };
  let pinPost = () => {
    props.pinPost(props.id);
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
  const [checked, setChecked] = useState(false);
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
      <div className={styles.likesPost}>
        <p>{props.likesCount}</p>
        <ToggleButton
          className={styles.likesPostBtn}
          checked={checked}
          onChange={(e) => setChecked(e.value)}
          onIcon="pi pi-heart-fill"
          offIcon="pi pi-heart"
          onLabel
          offLabel
        />
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
