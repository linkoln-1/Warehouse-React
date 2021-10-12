import React from "react";
import {Route, useHistory} from "react-router-dom";
import ModalContent from "./ModalContent";
import Step1 from "./StepModal/Step1";
import Step2 from "./StepModal/Step2";
import Step3 from "./StepModal/Step3";

function Modal(props) {
 const history = useHistory();

 const handleClick = () => {
  history.push("/warehouse");
 };

 return (
   <div className="modal" onClick={handleClick}>
     <Route exact path={"/warehouse/add_warehouse"}>
      <ModalContent />
     </Route>
     <Route exact path={"/warehouse/add_warehouse/step1"}>
      <Step1  Close={handleClick}/>
     </Route>
     <Route exact path={"/warehouse/add_warehouse/step2"}>
      <Step2  Close={handleClick} />
     </Route>
     <Route exact path={"/warehouse/add_warehouse/step3"}>
      <Step3  Close={handleClick} />
     </Route>


   </div>
 );
}

export default Modal;
