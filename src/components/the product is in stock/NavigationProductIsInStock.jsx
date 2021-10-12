import React from "react";
import AllProduct from "./AllProduct";
import InStock from "./InStock";
import Ended from "./Ended";
import styles from "./ProductIsInStock.module.css";
import { useSelector } from "react-redux";

function NavigationProductIsInStock(props) {
  //Требуется Доработка Функционала

  const info = useSelector((state) => state.warehouseInfo.WarehouseInfo);
  const total = info.data.map((tottalCount) => tottalCount.productsItemCount);
  return (
    <div>
      <div className={styles.NavigationProductIsInStock}>
        <AllProduct total={total} />
        <InStock />
        <Ended />
      </div>
    </div>
  );
}

export default NavigationProductIsInStock;
