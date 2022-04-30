import React, { useRef, useState } from "react";
import {
  deletePostActionCreator,
  pinPostActionCreator,
} from "../../../../../redux/store";
import styles from "./post.module.scss";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";

export const Post = (props) => {
  let deletePost = () => {
    props.dispatch(deletePostActionCreator(props.id));
  };
  let pinPost = () => {
    props.dispatch(pinPostActionCreator(props.id));
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
      <p>{props.text}</p>
      <p>{props.likesCount}</p>
      <Menu model={items} popup ref={menu} />
      <Button
        className={styles.postOptionsBtn}
        icon="pi pi-ellipsis-h"
        onClick={(event) => menu.current.toggle(event)}
      />
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
