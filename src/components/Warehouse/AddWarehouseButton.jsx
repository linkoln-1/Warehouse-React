import React from 'react';
import {Route, useHistory} from "react-router-dom";
import Modal from "./Modal";

function AddWarehouseButton(props) {
 const history = useHistory();

 const handleclick = () => {
  history.push("/warehouse/addWarehouse");
 };
 return (
   <div>
    <button onClick={handleclick} className="AddWarehouseButton">
     + добавить склад
    </button>

    <Route path={"/warehouse/addWarehouse"}>
     <Modal />
    </Route>
   </div>
 );
}

export default AddWarehouseButton;
