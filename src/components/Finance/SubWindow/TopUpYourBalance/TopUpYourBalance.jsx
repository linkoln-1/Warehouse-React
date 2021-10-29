import React from "react";
import HeaderTopUpYourBalance from "./HeaderTopUpYourBalance";
import styles from "./TopUpYourBalance.module.css";
import NavTopUpYourBalance from "./NavTopUpYourBalance";
import TopUpYourBalanceInput from "./TopUpYourBalanceInput";

function TopUpYourBalance(props) {
  return (
    <div className={styles.TopUpYourBalance}>
      <HeaderTopUpYourBalance />
      <NavTopUpYourBalance />
      <TopUpYourBalanceInput />
    </div>
  );
}

export default TopUpYourBalance;
