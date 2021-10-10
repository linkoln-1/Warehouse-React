import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import WarehouseName from "./ModalItem/WarehouseName";
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
      <div className="header_modal">
        <div>Добавить Склады</div>
        <div className="button_modal">
          <button
            onClick={handleClose}
            type="button"
            className="btn-close"
            aria-label="Close"
          >
            {" "}
            {""}
          </button>
        </div>
      </div>
      <hr />
      <WarehouseName />
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
