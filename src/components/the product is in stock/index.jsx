import React from "react";
import styles from "./ProductIsInStock.module.css";
import HeaderProductIsInStock from "./HeaderProductIsInStock";
import NavigationNameLine from "./NavigationNameLine";
import NavigationProductIsInStock from "./NavigationProductIsInStock";
import ProductIsInStockSearch from "./ProductIsInStockSearch";
import ProductIsInStockMainContent from "./ProductIsInStockMainContent";
import InStockProduct from "./InStockProduct";

function ProductIsInStock(props) {
  return (
    <div className={styles.ProductIsInStock}>
      <HeaderProductIsInStock />
      <NavigationNameLine />
      <NavigationProductIsInStock />
      <ProductIsInStockSearch />
      <ProductIsInStockMainContent />
      <InStockProduct />
    </div>
  );
}

export default ProductIsInStock;
