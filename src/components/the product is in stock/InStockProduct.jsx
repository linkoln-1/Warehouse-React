import React, {useState} from "react";
import Products from "./Products";
import { useSelector } from "react-redux";
import { Pagination, Stack } from "@mui/material";
import styles from "./ProductIsInStock.module.css";

function InStockProduct(props) {
  const products = useSelector(
    (state) => state.WarehouseProduct.WarehouseProduct
  );
  const [itemsPerPage, setItemPerPage] = useState(3) ;
  const [page, setPage] = React.useState(1);
  const noOfPages = Math.ceil(products.length / itemsPerPage);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleSelectProductsPerPage = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
     setItemPerPage(e.target.options[selectedIndex].value)
  };

  return (
    <div>
      {products
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .map((product) => {
          return <Products product={product} key={product.id} />;
        })}
      <div className={styles.FooterWithPagination}>

        <div>
          Кол-во строк:
          <select
            className={styles.SelectProductsPerPage}
            onChange={handleSelectProductsPerPage}
            value={itemsPerPage}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>

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
        <div style={{ color: "#6C757D" }}>
          {itemsPerPage * (page - 1)}-
          {itemsPerPage * page} из {products.length}
          {itemsPerPage * page} из{" "}
          {products.length}
        </div>
      </div>
    </div>
  );
}

export default InStockProduct;
