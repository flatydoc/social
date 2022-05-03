import { connect } from "react-redux";
import { SideBar } from "./SideBar";

let mapStateToProps = (state) => {
  return {
    messanger: state.messanger,
  };
};

export const SideBarContainer = connect(mapStateToProps)(SideBar);
