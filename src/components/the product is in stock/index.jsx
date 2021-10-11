import React from "react";
import styles from "./ProductIsInStock.module.css";
import HeaderProductIsInStock from "./HeaderProductIsInStock";
import NavigationNameLine from "./NavigationNameLine";
import NavigationProductIsInStock from "./NavigationProductIsInStock";
import ProductIsInStockSearch from "./ProductIsInStockSearch";
import ProductIsInStockMainContent from "./ProductIsInStockMainContent";
import InStockProduct from "./InStockProduct";
import { useSelector } from "react-redux";

function ProductIsInStock(props) {
  const info = useSelector((state) => state.warehouseInfo.WarehouseInfo.data);

  return (
    <div className={styles.ProductIsInStock}>
      <HeaderProductIsInStock />
      <NavigationNameLine />
      <NavigationProductIsInStock />
      <ProductIsInStockSearch />
      <ProductIsInStockMainContent />
      {info === undefined ? (
        "loading false"
      ) : (
        <div>
          {info.map((item, index) => {
            return <InStockProduct item={item} key={index} />;
          })}
        </div>
      )}
    </div>
  );
}

export default ProductIsInStock;
