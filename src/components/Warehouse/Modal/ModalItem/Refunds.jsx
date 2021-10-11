import React from "react";
import Dropdown from "./Dropdown";

function Refunds({ selected, setSelected, options }) {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-10">
          <p>
            <b>Способ получения возвратов от покупателей</b>
          </p>
          <span>Откуда забирать возвраты *</span>
        </div>
        <div className="col-12">
          <Dropdown
            selected={selected}
            options={options}
            setSelected={setSelected}
          />
        </div>
      </div>

      {selected === "Выбрать" ? (
        ""
      ) : (
        <div>
          <div className="row mt-3">
            <div className="d-flex justify-content-between">
              <div className="col-5">
                <p>Регион</p>
                <input className="form-control" type="text" />
              </div>
              <div className="col-5">
                <p>Город</p>
                <input className="form-control" type="text" />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-5">
              <p>Улица</p>
              <input className="form-control" type="text" />
            </div>

            <div className="col-2">
              <p>Индекс</p>
              <input className="form-control" type="text" />
            </div>

            <div className="col-2">
              <p>Дом</p>
              <input className="form-control" type="text" />
            </div>

            <div className="col-2">
              <p>Корпус</p>
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12">
              <p>
                <b>Краткая инструкция по возврату для покупателя *</b>
              </p>
              <textarea
                className="form-control"
                style={{ width: "550px", height: "100px" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Refunds;
