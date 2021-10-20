import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./MenuStyle.module.css";
import settings from "../../images/settings (2) 1.svg";

function MenuProperties(props) {
  const history = useHistory();
  const [active, setActive] = useState(false);
  const handleClick = () => {
    history.push("/warehouse");
    setActive(true);
  };
  return (
    <ul>
      <li>Обзор</li>
      <li>Маркетплейсы</li>
      <li>Продукты</li>
      <li>Прайс-лист</li>
      <li>Отгрузки и склады</li>
      <li>Заказы</li>
      <li>Аналитика</li>
      <li onClick={handleClick} className={active ? styles.Selected : ""}>
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
