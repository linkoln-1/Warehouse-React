import React from "react";
import styles from "./MenuStyle.module.css";
import casch from "../../images/Group 10.svg";

function Finance(props) {
  return (
    <div className={styles.finance}>
      <div className={styles.textFinance}>
        <p>
          Баланс <b>0 ₽</b>
        </p>
        <p>Финансы</p>
      </div>
      <div className={styles.AddCasch}>
        <img src={casch} alt="" />
      </div>
    </div>
  );
}

export default Finance;
