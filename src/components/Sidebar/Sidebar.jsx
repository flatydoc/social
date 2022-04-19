import React from "react";
import { PrimeIcons } from "primereact/api";
import { SideBarLink } from "./SideBarLink/SideBarLink";
import styles from "./sideBar.module.scss";

export const SideBar = () => (
  <div className={styles.sideBar}>
    <nav className={styles.sideBarNav}>
      <SideBarLink link="/profile" name="Profile" icon={PrimeIcons.USER} />
      <SideBarLink
        link="/messanger"
        name="Messanger"
        icon={PrimeIcons.SEND}
        value="467"
      />
      <SideBarLink link="/news" name="News" icon={PrimeIcons.LIST} value="2" />
      <SideBarLink
        link="/friends"
        name="Friends"
        icon={PrimeIcons.USERS}
        value="45"
      />
      <SideBarLink link="/settings" name="Settings" icon={PrimeIcons.COG} />
    </nav>
  </div>
);
