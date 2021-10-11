import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Step1({ Close }) {
  const history = useHistory();

  const delMethod = [
    { text: "СДЭК" },
    { text: "ПОЧТА РОССИИ" },
    { text: "DPD" },
    { text: "БОКСБЕРРИ" },
    {
      text: "ДРУГАЯ СЛУЖБА ИЛИ САМОСТОЯТЕЛЬНО",
      subText: "Если службы-партнеры из списка выше вам не подходят",
    },
  ];
  const [selectMethod, setSelectMethod] = useState();
  const [methodWasSelect, setMethodWasSelect] = useState(true);

  const handleSelect = (index) => {
    setSelectMethod(index);
    setMethodWasSelect(false);
  };
  const handleStep2 = () => {
    history.push("/warehouse/addWarehouse/step2");
  };

  return (
    <div
      className="modal_content"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="row d-flex border-bottom mb-2 justify-content-between">
        <div className="col-7 pb-3 d-flex">
          <div>Методы доставки</div>
          <div className="col text-secondary ms-3">Шаг 1</div>
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

      <div>
        <div className="delivery_method_title">Выберите службу доставки</div>
        <div className="delivery_method_sub_title">
          Выберите службу доставки, которой будете доставлять товары. Если
          службы-партнеры вам не подходят, выберете пункт «Другая служба или
          самостоятельно».{" "}
        </div>
      </div>
      {delMethod.map((item, index) => {
        return (
          <div
            className={`delivery_method ${
              selectMethod === index ? "delivery_method_select" : ""
            }`}
            key={index}
            onClick={() => handleSelect(index)}
          >
            <div className="delivery_method_title">{item.text}</div>
            <div className="delivery_method_sub_title">{item.subText}</div>
          </div>
        );
      })}
      <div className="col-2">
        <button
          disabled={methodWasSelect}
          className={`delivery_method_button ${
            methodWasSelect ? "" : "delivery_method_button_active"
          }`}
          onClick={handleStep2}
        >
          Далее
        </button>
      </div>
    </div>
  );
}

export default Step1;
