import React from "react";
import { PrimeIcons } from "primereact/api";
import { SideBarLink } from "./SideBarLink/SideBarLink";
import styles from "./sideBar.module.scss";

export const SideBar = (props) => {
  let messagesCount = props.state.messanger.chatMessagesData.length;
  let messagesCountTotal = props.state.messanger.chatListData.reduce(
    (prev, curr) => prev + curr.value * messagesCount,
    0
  );

  return (
    <aside className={styles.sideBar}>
      <nav className={styles.sideBarNav}>
        <SideBarLink link="/profile" name="Profile" icon={PrimeIcons.USER} />
        <SideBarLink
          link="/messanger"
          name="Messanger"
          icon={PrimeIcons.SEND}
          value={messagesCountTotal}
          severity="info"
        />
        <SideBarLink
          link="/news"
          name="News"
          icon={PrimeIcons.LIST}
          value="0"
          severity="info"
        />
        <SideBarLink
          link="/friends"
          name="Friends"
          icon={PrimeIcons.USERS}
          value="0"
          severity="info"
        />
        <SideBarLink
          link="/settings"
          name="Settings"
          icon={PrimeIcons.COG}
          value="0"
          severity="danger"
        />
      </nav>
    </aside>
  );
};
