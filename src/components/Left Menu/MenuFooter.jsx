import React from "react";
import styles from "./MenuStyle.module.css";
import whatsappIcon from "../../images/whatsapp (5) 1.svg";
function MenuFooter(props) {
  return (
    <div className={styles.Footer}>
      <div className={styles.Button}>+ Добавить компанию</div>

      <div className={styles.policy}>
        <p>Политика конфиденциальности</p>
        <p>Условия использования</p>
        <p style={{ padding: 0, margin: 0 }}>Оферта</p>
        <div className={styles.WhatsApp}>
          <p style={{ padding: 0, margin: 0 }}>Помощь</p>
          <img src={whatsappIcon} alt="" />
          <p>WhatsApp</p>
        </div>
      </div>
    </div>
  );
}

export default MenuFooter;
