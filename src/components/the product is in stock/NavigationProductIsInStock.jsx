import React from "react";
import AllProduct from "./AllProduct";
import InStock from "./InStock";
import Ended from "./Ended";
import styles from "./ProductIsInStock.module.css";
import {useSelector} from "react-redux";

function NavigationProductIsInStock(props) {
  //Требуется Доработка Функционала
 const products = useSelector((state) => state.WarehouseProduct.WarehouseProduct);
 const product = products?.map((item) => item.data.totalCount);
  return (
    <div>
      <div className={styles.NavigationProductIsInStock}>
        <AllProduct total={product}  />
        <InStock />
        <Ended />
      </div>
    </div>
  );
}

export default NavigationProductIsInStock;
