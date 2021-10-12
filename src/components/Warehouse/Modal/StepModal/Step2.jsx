import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ReformatDate from "./ReformateDate";

function Step2({ Close }) {
  const [select, setSelect] = useState("Выбрать");
  const option = ["до 01:00", "до 02:00", "до 03:00"];

  const history = useHistory();

  const handleBack = () => {
    history.push("/warehouse/add_warehouse/step1");
  };

  const handleStep3 = () => {
    history.push("/warehouse/add_warehouse/step3");
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
            disabled={select === "Выбрать"}
            className={
              select !== "Выбрать"
                ? "delivery_method_button delivery_method_button_active"
                : "delivery_method_button"
            }
            onClick={handleStep3}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step2;
