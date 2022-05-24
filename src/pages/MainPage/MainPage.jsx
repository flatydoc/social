import React from "react";
import { Content } from "../../components/Content/Content";
import { Header } from "../../components/Header/Header";
import { SideBarContainer } from "../../components/SideBar/SideBarContainer";
import styles from "./mainPage.module.scss";

export const MainPage = (props) => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <SideBarContainer />
      <Content switchTheme={props.switchTheme} />
    </div>
  );
};
