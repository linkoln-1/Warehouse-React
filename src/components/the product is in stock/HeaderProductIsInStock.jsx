import React from "react";
import styles from "./ProductIsInStock.module.css";
import burgerMenu from "../../images/menu_burger.svg";
import selectLanguage from "../../images/Polygon 1.svg";
import KolokolProductIsInStock from "../../images/kolokolchik.svg";

function HeaderProductIsInStock(props) {
  return (
    <div className={styles.HeaderProductIsInStock}>
      <div className={styles.ImageBurgerProductIsInStock}>
        <img src={burgerMenu} alt="" />
        <p>Товары на складе «AOPPA ГРУПП»</p>
      </div>
      <div className={styles.LanguageSettingsProductIsInStock}>
        <div className={styles.LanguageProductIsInStock}>
          <p>Русский</p>
          <img src={selectLanguage} alt="" />
        </div>
        <div className={styles.KolokolProductIsInStock}>
          <img src={KolokolProductIsInStock} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeaderProductIsInStock;
