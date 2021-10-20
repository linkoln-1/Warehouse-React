import React from "react";
import { useSelector } from "react-redux";
import Products from "./Products";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function InStockProduct(props) {
  const products = useSelector((state) => state.WarehouseProduct.WarehouseProduct);
  const loading = useSelector((state) => state.WarehouseProduct.loading);
  return (
    <div>
      {loading
        ?  <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
        : products.map((product, index) => {
            return <Products product={product} key={index} />;
          })}
    </div>
  );
}

export default InStockProduct;
