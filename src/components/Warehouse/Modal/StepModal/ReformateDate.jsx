import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

function ReformatDate({ selected, setSelected, options }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selected}
        <BsFillCaretDownFill />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option,index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReformatDate;
