import React from "react";
import styles from "./ProductIsInStock.module.css";

function Readctive(props) {
  return (
    <div className={styles.ModalStock}>
      <div className={styles.ModalStockInWarehouse}>
        <h5>На моем складе</h5>
      </div>
      <div className={styles.ModalStockInWarehousePro}>
          <span style={{fontSize:14, fontWeight:500}}>Доступно:</span>
        <input className="form-control" type="text" />
      </div>

      <div style={{display:"flex", justifyContent:"space-between", margin: "20px 0 10px 10px"}}>
        <div>
          <span style={{fontSize:14, fontWeight:500}}>зарезервировано:</span>
        </div>
        <p style={{color:"#6C757D"}}>40</p>
      </div>
      <hr />

      <div style={{display:"flex", justifyContent:"space-between", margin: "20px 0 10px 10px"}}>
        <div>
          <p style={{fontSize:14, fontWeight:500}}>всего товаров:</p>
        </div>

        <div>
          <span style={{color:"#6C757D"}}>200</span>
        </div>
      </div>
    </div>
  );
}

export default Readctive;
