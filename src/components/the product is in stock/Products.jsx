import React, { useState } from "react";
import styles from "./ProductIsInStock.module.css";
import Redactive from "./Readctive";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function Product({ product }) {
  const loading = useSelector((state) => state.WarehouseProduct.loading);
  const [id, setId] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [currentProduct, setCurrentProduct] = useState("");
  const Onchange = (e) => {
    setCurrentProduct(e.target.value);
  };
  const handleId = () => {
    setId(product.id);
    setIsActive(isActive !== true);
    setCurrentProduct(product.currentStockInMyWarehouse);
  };

  return (
    <div>
      {loading ? (
        <div className={styles.Spiner}>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      ) : (
        <div>
          <div className={styles.InStockProduct}>
            <div className={styles.ArtikulProduct}>{product.offerId}</div>
            <div className={styles.PhotosProduct}>Фото</div>
            <div className={styles.BarcodeProduct}>{product.barcode}</div>
            <div className={styles.NameProduct}>{product.name}</div>
            <div className={styles.PriceProduct}>{product.price}</div>

            <div className={styles.RelativeModalItem}>
              <div className={styles.InStockProducts} onClick={handleId}>
                {product.currentStockInMyWarehouse}
              </div>
              <div className={styles.AbsoluteModal}>
                {isActive && id ? (
                  <Redactive
                    setActive={setIsActive}
                    currentProduct={currentProduct}
                    Onchange={Onchange}
                    id={id}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className={styles.inWarehouseProduct}>
              {product.currentStockOnWarehouse}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Product;
