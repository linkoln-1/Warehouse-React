import React from 'react';
import styles from "./ProductIsInStock.module.css";
import {NavLink} from "react-router-dom";

function AllProduct({count}) {
 return (
   <div className={styles.AllProduct}>
    <NavLink to="" activeClassName="Active" >
     <span className="CountActive_1">Все Товары</span>
     <span className="CountActive_2">({count.data.totalCount})</span>
    </NavLink>
   </div>
 );
}

export default AllProduct;
