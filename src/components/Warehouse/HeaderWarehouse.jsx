import React from "react";
import styles from "./Warehouse.module.css";
import burgerMenu from "../../images/menu_burger.svg";
import selectLanguage from "../../images/Polygon 1.svg";
import kolokol from "../../images/kolokolchik.svg";
function HeaderWarehouse(props) {
  return (
    <div className={styles.HeaderWarehouse}>
      <div className={styles.imageBurgerMenu}>
        <img src={burgerMenu} alt="" />
        <p>Склады ООО ЛК Маркет</p>
      </div>
      <div className={styles.LanguageSetting}>
        <div className={styles.Language}>
          <p>Русский</p>
          <img src={selectLanguage} alt="" />
        </div>
        <div className={styles.kolokol}>
          <img src={kolokol} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeaderWarehouse;
