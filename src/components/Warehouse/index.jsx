import React from "react";
import styles from "./Warehouse.module.css";
import HeaderWarehouse from "./HeaderWarehouse";
import NavigationWarehouse from "./NavigationWarehouse";
import AddWarehouseButton from "./AddWarehouseButton";
import CardWarehouse from "./Card Warehouse";

function Warehouse() {
  return (
    <div className={styles.Warehouse}>
      <HeaderWarehouse />
      <NavigationWarehouse />
      <AddWarehouseButton />
      <CardWarehouse />
    </div>
  );
}

export default Warehouse;
