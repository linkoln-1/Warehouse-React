import React from "react";
import HeaderMenu from "./HeaderMenu";
import styles from "../Left Menu/MenuStyle.module.css";
import Finance from "./Finance";
import Market from "./Market";
import MenuProperties from "./MenuProperties";
import MenuFooter from "./MenuFooter";

function Menu(props) {
  return (
    <div className={styles.Menu}>
      <HeaderMenu />
      <Finance />
      <Market />
      <MenuProperties />
      <MenuFooter />
    </div>
  );
}

export default Menu;
