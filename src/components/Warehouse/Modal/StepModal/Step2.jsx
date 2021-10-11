import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ReformatDate from "./ReformateDate";

function Step2({ Close }) {
  const [select, setSelect] = useState("Выбрать");
  const option = ["Другой адрес"];
  console.log(select);

  const history = useHistory();

  const handleBack = () => {
    history.push("/warehouse/addWarehouse/step1");
  };

  return (
    <div
      className="modal_content"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="row d-flex border-bottom justify-content-between">
        <div className="col-7 pb-3 d-flex">
          <div>Методы доставки</div>
          <div className="col text-secondary ms-3">Шаг 2</div>
        </div>
        <div className="col-1 button_modal">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={Close}
          >
            {""}
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12 mt-3 delivery_method_title">Название метода</div>
        <div className="col-12">
          <div className="mt-1 mb-2 delivery_method_sub_title text-dark">
            Изменить название метода
          </div>
          <div>
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="delivery_method_title mt-4 mb-3">
          Окончание сборки заказов
        </div>
        <div className="delivery_method_sub_title color_blue">
          Укажите час, к которому вы обязуетесь собрать заказы в день отгрузки
        </div>

        <ReformatDate
          selected={select}
          options={option}
          setSelected={setSelect}
        />
      </div>

      <div className="col-5 d-flex">
        <div>
          <button
            className="delivery_method_button button_blue_step2 me-4"
            onClick={handleBack}
          >
            Назад
          </button>
        </div>
        <div>
          <button
            className="delivery_method_button"
            disabled={select === "выбрать"}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step2;
