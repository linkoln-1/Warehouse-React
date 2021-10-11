import React from "react";
import { Route, useHistory } from "react-router-dom";
import RightModal from "./Modal";

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

    <Route path={"/warehouse/add_warehouse"}>
     <RightModal />
    </Route>
   </div>
 );
}

export default AddWarehouseButton;
