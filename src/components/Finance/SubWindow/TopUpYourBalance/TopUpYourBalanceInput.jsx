import React from "react";
import LeftInput from "./LeftInput";
import RightMenu from "./RightMenu";

function TopUpYourBalanceInput(props) {
  return (
    <div className="d-flex justify-content-between">
      <LeftInput />
      <RightMenu />
    </div>
  );
}

export default TopUpYourBalanceInput;
