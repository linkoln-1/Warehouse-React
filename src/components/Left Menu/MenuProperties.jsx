import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./MenuStyle.module.css";
import settings from "../../images/settings (2) 1.svg";

function MenuProperties({
  activeWarehouse,
  setActiveWarehouse,
  activeOverview,
  setActiveOverview,
}) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/warehouse");
    setActiveWarehouse(true);
    setActiveOverview(false);
  };
  const handleOverview = () => {
    history.push("/Overview");
    setActiveOverview(true);
    setActiveWarehouse(false);
  };
  return (
    <ul>
      <li
        onClick={handleOverview}
        className={activeOverview ? styles.Selected : ""}
      >
        Обзор
      </li>
      <li>Маркетплейсы</li>
      <li>Продукты</li>
      <li>Прайс-лист</li>
      <li>Отгрузки и склады</li>
      <li>Заказы</li>
      <li>Аналитика</li>
      <li
        onClick={handleClick}
        className={activeWarehouse ? styles.Selected : ""}
      >
        Склады
      </li>
      <li>
        <div className={styles.Settings}>
          <img src={settings} alt="" />
          Настройки
        </div>
      </li>
    </ul>
  );
}

export default MenuProperties;
