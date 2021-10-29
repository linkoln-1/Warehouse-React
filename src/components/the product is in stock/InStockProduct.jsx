import React from "react";
import Products from "./Products";
import { useSelector } from "react-redux";
import { Pagination, Stack } from "@mui/material";

function InStockProduct(props) {
  const products = useSelector(
    (state) => state.WarehouseProduct.WarehouseProduct
  );
  const itemsPerPage = 10;
  const [page, setPage] = React.useState(1);
  const noOfPages = Math.ceil(products.length / itemsPerPage);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      {products
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .map((product) => {
          return <Products product={product} key={product.id} />;
        })}
      <Stack>
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          size="large"
          style={{ margin: "auto" }}
        />
      </Stack>
    </div>
  );
}

export default InStockProduct;
