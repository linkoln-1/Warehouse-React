import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WarehouseProduct } from "../../redux/actions";
import Products from "./Products";

function InStockProduct(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(WarehouseProduct(props.item.warehouseExternalId));
  }, [props.item.warehouseExternalId, dispatch]);

  const products = useSelector(
    (state) => state.WarehouseProduct.WarehouseProduct
  );
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
