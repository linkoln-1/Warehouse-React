import React from "react";

function Step3({ Close }) {
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
          <div className="col text-secondary ms-3">Шаг 3</div>
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
    </div>
  );
}

export default Step3;
