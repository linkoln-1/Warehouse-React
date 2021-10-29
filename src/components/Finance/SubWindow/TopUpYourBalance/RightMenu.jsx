import React from "react";
import styles from "./TopUpYourBalance.module.css";

function RightMenu(props) {
  return (
    <div className={styles.RightInput}>
      <div style={{ fontWeight: "600", fontSize: "19px" }}>
        Пополнить баланс
      </div>
      <div style={{ fontSize: "14px", marginBottom: "6px" }}>
        Баланс Доп.услуг 0Р
      </div>
      <div style={{ fontSize: "14px", marginBottom: "6px" }}>
        Доступно средств 0Р
      </div>
      <div className="mb-4">
        Сумма, Р
        <div style={{ marginTop: "6px" }}>
          <input
            style={{ width: "97%" }}
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <button
        style={{
          backgroundColor: "#17a2b8",
          border: "#17a2b8",
          color: "#fff",
          borderRadius: "3px",
          padding: "10px",
        }}
      >
        Пополнить
      </button>
    </div>
  );
}

export default RightMenu;
