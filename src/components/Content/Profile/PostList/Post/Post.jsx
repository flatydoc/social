import React, { useRef, useState } from "react";
import styles from "./post.module.scss";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";
import { PrimeIcons } from "primereact/api";

export const Post = (props) => {
  let items = [
    {
      label: "Pin",
      icon: "pi pi-paperclip",
      // command: () => {
      //   pinPost();
      // },
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      command: () => {
        setVisible(true);
      },
    },
  ];

  // const tegs = () => {
  //   let teg = props.text
  //     .split(" ")
  //     .filter((el) => el.includes("#"))
  //     .join(", ");

  //   console.log(teg);
  //   return teg;
  // };

  const menu = useRef(null);
  const [visible, setVisible] = useState(false);

  return (
    <div key={props.index} className={styles.post}>
      <div className={styles.postText}>{props.text}</div>
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
          onClick={() => props.likePost(props.id)}
          className={`${
            props.like === false ? PrimeIcons.HEART : PrimeIcons.HEART_FILL
          } pr-3`}
          style={{ color: "red", fontSize: "2em" }}
        ></button>
        <p>{props.likesCount}</p>
      </div>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        header="Delete ?"
        message="Are you sure you want to delete the post?"
        icon="pi pi-trash"
        accept={() => props.removePost(props.id)}
      />
    </div>
  );
};
