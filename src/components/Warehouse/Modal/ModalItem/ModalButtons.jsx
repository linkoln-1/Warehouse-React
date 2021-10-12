import React from "react";
import { useHistory } from "react-router-dom";

function ModalButtons({ handleSelect }) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/warehouse/add_warehouse/step1");
  };

  return (
    <div className="row mt-3">
      <div className="col-5">
        <button className="form-control" disabled={handleSelect === "Выбрать"}>
          Сохранить склад
        </button>
      </div>
      <div className="col-6">
        <button
          onClick={handleClick}
          disabled={handleSelect === "Выбрать"}
          className="form-control"
        >
          Добавить метод доставки
        </button>
      </div>
    </div>
  );
}

export default ModalButtons;
