import React, { useState } from "react";
import Slider from "react-input-slider";

function BuildTime(props) {
 const [state, setState] = useState({ x: 0 });

 return (
   <div>
    <div className="row mt-3">
     <div className="col-12">
          <span>
            <b>Время сборки</b>
          </span>
      <p
        style={{
         fontSize: "14px",
         color: "#A5A5A5",
         padding: 0,
         margin: 0,
        }}
      >
       Ползунком выберите время на сборку одной посылки, чтобы система
       рассчитала график подготовки и отгрузки заказов.
      </p>
      <span style={{ fontsize: "14px", color: "#17A2B8" }}>
            <b>Отгрузить заказы нужно в день сборки.</b>
          </span>
     </div>
    </div>

    <div className="row">
     <div className="col-12">
      ({state.x})
      <div>
       <Slider
         axis="x"
         x={state.x}
         styles={{
          track: {
           backgroundColor: "#ced4da",
           width: "500px",
          },
          active: {
           backgroundColor: "#17a2b8",
          },
          thumb: {
           width: 15,
           height: 15,
          },
          disabled: {
           opacity: 0.5,
          },
         }}
         xmin={0}
         xmax={1000}
         onChange={({ x }) => setState((state) => ({ ...state, x }))}
       />
      </div>
     </div>
    </div>
   </div>
 );
}

export default BuildTime;
