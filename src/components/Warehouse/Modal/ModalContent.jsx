import React, { useState } from "react";
import WarhouseName from "../Modal/ModalItem/WarehouseName";
import { useHistory } from "react-router-dom";
import WorkingDays from "./ModalItem/WorkingDays";
import BuildTime from "./ModalItem/BuildTime";
import Refunds from "./ModalItem/Refunds";
import ModalButtons from "./ModalItem/ModalButtons";

function ModalContent(props) {
  const history = useHistory();
  const [selected, setSelected] = useState("Выбрать");
  const options = ["Другой адрес"];
  const handleClose = () => {
    history.push("/warehouse");
  };

  return (
    <div className="modal_content" onClick={(e) => e.stopPropagation()}>
      <div className="row border-bottom d-flex justify-content-between">
        <div className="col-4 pb-3">Добавить Склады</div>
        <div className="col-1 button_modal">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleClose}
          >
            {""}
          </button>
        </div>
      </div>
      <WarhouseName />
      <WorkingDays />
      <BuildTime />
      <Refunds
        options={options}
        selected={selected}
        setSelected={setSelected}
      />
      <ModalButtons handleSelect={selected} />
    </div>
  );
}

export default ModalContent;
