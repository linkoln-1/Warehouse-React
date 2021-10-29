import React from "react";
import Card from "./Card";
import Modal from "../Modal/index";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../../the product is in stock/ProductIsInStock.module.css";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function CardWarehouse() {
  const CardInfo = useSelector((state) => state.CardInfo.CardInfo);
  const loading = useSelector((state) => state.CardInfo.loading);
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
          {CardInfo.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </div>
      )}
      <Route path={"/warehouse/add_warehouse"}>
        <Modal />
      </Route>
    </div>
  );
}

export default CardWarehouse;
