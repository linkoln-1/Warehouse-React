import React from "react";
import styles from "./ProductIsInStock.module.css";

function Ended(props) {
  return (
    <div className={styles.Ended}>
      <p>Закончились()</p>
    </div>
  );
}

export default Ended;
