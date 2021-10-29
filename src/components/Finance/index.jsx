import React from "react";
import HeaderFinance from "./HeaderFinance";
import styles from "./Finance.module.css";
import NavFinance from "./NavFinance";
import FinanceProperties from "./FinanceProperties";

function Finance(props) {
  return (
    <div className={styles.Finance}>
      <HeaderFinance />
      <NavFinance />
      <FinanceProperties />
    </div>
  );
}

export default Finance;
