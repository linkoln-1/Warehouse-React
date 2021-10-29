import React from "react";
import styles from "./Finance.module.css";
import { useHistory } from "react-router-dom";

function FinanceProperties(props) {
  const history = useHistory();
  const handleTopUpYourBalance = () => {
    history.push("/Finance/TopUpYourBalance");
  };
  const handleRate = () => {
    history.push("/Finance/Rate");
  };
  return (
    <div className={styles.FinanceCard}>
      <div
        className={styles.TopUpYourBalance}
        onClick={handleTopUpYourBalance}
        style={{ cursor: "pointer" }}
      >
        Пополнить баланс
      </div>

      <div
        className={styles.InvoicesAndDocuments}
        style={{ cursor: "pointer" }}
      >
        Счета и документы
      </div>

      <div
        className={styles.Rate}
        onClick={handleRate}
        style={{ cursor: "pointer" }}
      >
        Тариф
      </div>

      <div className={styles.OrderedServices} style={{ cursor: "pointer" }}>
        Заказанные услуги
      </div>

      <div className={styles.OperationHistory} style={{ cursor: "pointer" }}>
        История операции
      </div>

      <div className={styles.AdditionalServices} style={{ cursor: "pointer" }}>
        Дополнительные услуги
      </div>
    </div>
  );
}

export default FinanceProperties;
