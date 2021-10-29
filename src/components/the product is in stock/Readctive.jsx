import React from "react";
import styles from "./ProductIsInStock.module.css";
import { useDispatch } from "react-redux";
import { SaveCurrentInStock } from "../../redux/actions";

function Readctive({ currentProduct, Onchange }) {
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(SaveCurrentInStock(currentProduct));
  };

  return (
    <div className={styles.ModalStock}>
      <div className={styles.ModalStockInWarehouse}>
        <h5>На моем складе</h5>
      </div>
      <div className={styles.ModalStockInWarehousePro}>
        <span style={{ fontSize: 14, fontWeight: 500 }}>Доступно:</span>
        <input
          className="form-control"
          type="text"
          onChange={Onchange}
          value={currentProduct}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0 10px 10px",
        }}
      >
        <div>
          <span style={{ fontSize: 14, fontWeight: 500 }}>
            зарезервировано:
          </span>
        </div>
        <p style={{ color: "#6C757D" }}>40</p>
      </div>
      <hr />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0 10px 10px",
        }}
      >
        <div>
          <p style={{ fontSize: 14, fontWeight: 500 }}>всего товаров:</p>
        </div>

        <div>
          <span style={{ color: "#6C757D" }}>{currentProduct}</span>
        </div>
      </div>

      <div className={styles.ButtonModal}>
        <button className={styles.ButtonSave} onClick={handleSave}>
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default Readctive;
