import React  from "react";
import { useSelector } from "react-redux";
import Products from "./Products";

function InStockProduct(props) {
  const products = useSelector((state) => state.WarehouseProduct.WarehouseProduct);
  const loading = useSelector((state) => state.WarehouseProduct.loading);

  return (
    <div>
      {loading
        ? "Loading is start"
        : products.map((product, index) => {
            return <Products product={product} key={index} />;
          })}
    </div>
  );
}

export default InStockProduct;
