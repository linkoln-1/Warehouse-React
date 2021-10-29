import React, { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import styles from "../Left Menu/MenuStyle.module.css";
import Finance from "./Finance";
import Market from "./Market";
import MenuProperties from "./MenuProperties";
import MenuFooter from "./MenuFooter";

function Menu(props) {
  const [activeWarehouse, setActiveWarehouse] = useState(false);
  const [activeOverview, setActiveOverview] = useState(false);
  return (
    <div className={styles.Menu}>
      <HeaderMenu />
      <Finance
        setActiveWarehouse={setActiveWarehouse}
        setActiveOverview={setActiveOverview}
      />
      <Market />
      <MenuProperties
        activeWarehouse={activeWarehouse}
        setActiveWarehouse={setActiveWarehouse}
        activeOverview={activeOverview}
        setActiveOverview={setActiveOverview}
      />
      <MenuFooter />
    </div>
  );
}

export default Menu;
