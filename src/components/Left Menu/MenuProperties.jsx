import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuStyle.module.css";
import settings from "../../images/settings (2) 1.png";

function MenuProperties(props) {
  return (
    <div className={styles.KleineMenu}>
      <p>Обзор</p>
      <p>Маркетплейсы</p>
      <p>Продукты</p>
      <p>Прайс-лист</p>
      <p>Отгрузки и склады</p>
      <p>Заказы</p>
      <p>Аналитика</p>
      <NavLink activeClassName={styles.Selected} to="/warehouse">
        <p>Склады</p>
      </NavLink>
      <div className={styles.Settings}>
        <img src={settings} alt="" />
        <p>Настройки</p>
      </div>
    </div>
  );
}

export default MenuProperties;
