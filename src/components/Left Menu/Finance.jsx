import React from "react";
import styles from "./MenuStyle.module.css";
import casch from "../../images/Group 10.svg";
import { useHistory } from "react-router-dom";

function Finance({ setActiveWarehouse, setActiveOverview }) {
  const history = useHistory();
  const handleFinance = () => {
    history.push("/Finance");
    setActiveWarehouse(false);
    setActiveOverview(false);
  };
  return (
    <div className={styles.finance}>
      <div className={styles.textFinance}>
        <p>
          Баланс <b>0 ₽</b>
        </p>
        <p onClick={handleFinance} style={{ cursor: "pointer" }}>
          Финансы
        </p>
      </div>
      <div className={styles.AddCasch}>
        <img src={casch} alt="" />
      </div>
    </div>
  );
}

export default Finance;
