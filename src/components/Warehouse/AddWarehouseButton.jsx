import React from "react";
import { useHistory } from "react-router-dom";

function AddWarehouseButton(props) {
  const history = useHistory();

  const handleclick = () => {
    history.push("/warehouse/add_warehouse");
  };

  return (
    <div>
      <button className="AddWarehouseButton" onClick={handleclick}>
        + добавить склад
      </button>
    </div>
  );
}

export default AddWarehouseButton;
