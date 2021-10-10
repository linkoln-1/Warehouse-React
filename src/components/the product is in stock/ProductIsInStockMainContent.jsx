import React from 'react';
import styles from "./ProductIsInStock.module.css";

function ProductIsInStockMainContent(props) {
 return (
    <div className={styles.ProductIsInStockMainContentTop}>
     <p style={{paddingTop:17, paddingLeft:20, color: '#6C757D'}}>Артикул</p>
     <p style={{paddingTop:17, color: '#6C757D'}}>Фото</p>
     <p style={{paddingTop:17, color: '#6C757D'}}>Штрихкод</p>
     <p style={{paddingTop:17, marginRight:30, color: '#6C757D'}}>Название товара</p>
     <p style={{paddingTop:17, marginLeft:70, color: '#6C757D'}}>Цена</p>
     <p style={{paddingTop:17, color: '#6C757D'}}>На Складе, шт</p>
     <div>
      <p style={{margin:0, paddingRight:20, color: '#6C757D'}}>
       Всего на моих
      </p>
      <p style={{margin:0, paddingRight:20, color: '#6C757D'}}>
       складах, шт
      </p>
     </div>
    </div>
 );
}

export default ProductIsInStockMainContent;
