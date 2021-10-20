import React from "react";
import styles from "./ProductIsInStock.module.css";

function NavigationNameLine(props) {
  return (
    <div className={styles.NavigationLineProductIsInStock}>
      <p>
        Склады<span>/товары на складе</span>
      </p>
    </div>
  );
}

export default NavigationNameLine;
