import React from "react";
import AllProduct from "./AllProduct";
import InStock from "./InStock";
import Ended from "./Ended";
import styles from "./ProductIsInStock.module.css";
import { useSelector } from "react-redux";

function NavigationProductIsInStock(props) {
  //Требуется Доработка Функционала

  const products = useSelector((state) => state.WarehouseProduct.WarehouseProduct);
  const loading = useSelector((state) => state.WarehouseProduct.loading);
  return (
    <div>
      {loading
        ? ""
        : products.map((product,index) => {
            return (
              <div className={styles.NavigationProductIsInStock} key={index}>
                <AllProduct count={product} />
                <InStock count={product} />
                <Ended count={product} />
              </div>
            );
          })}
    </div>
  );
}

export default NavigationProductIsInStock;
