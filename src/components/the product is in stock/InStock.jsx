import React from 'react';
import styles from "./ProductIsInStock.module.css";

function InStock(props) {

 return (
   <div className={styles.InStock}>
    <p>В наличии()</p>
   </div>
 );
}

export default InStock;
