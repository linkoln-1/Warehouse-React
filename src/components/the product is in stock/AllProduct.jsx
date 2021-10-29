import React from "react";
import styles from "./ProductIsInStock.module.css";
import { NavLink } from "react-router-dom";

function AllProduct({ total }) {
  return (
    <div className={styles.AllProduct}>
      <NavLink to="" activeClassName={styles.Active}>
        <span className={styles.CountActive_1}>Все Товары</span>
        <span className={styles.CountActive_2}>({})</span>
      </NavLink>
    </div>
  );
}

export default AllProduct;
