import React, { useState } from "react";
import polygon2 from "../../../../images/Polygon 2.svg";

function Step3({ Close }) {
  // const [minDays, setMinDays] = useState(0);
  // // const [maxDays, setMaxDays] = useState(0);
  //
  // const handleMinus = () => {
  //   setMinDays(minDays - 1);
  // };
  // const handlePlus = () => {
  //   setMinDays(minDays + 1);
  // };

  return (
    <div
      className="modal_content"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="row d-flex border-bottom justify-content-between w-100">
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

      <div className="row mt-4">
        <div className="col-5" style={{ fontWeight: 500 }}>
          География доставки
        </div>
        <div className="col-12 mt-3">
          <input placeholder="Поиск" className="form-control" type="text" />
        </div>
      </div>

      <div className="Big_border">
        <div>
          <div className="Small_border_bottom">
            <div style={{ padding: "17px 0 0 20px" }}>
              <span>Куда</span>
            </div>
            <div className="d-flex ">
              <div style={{ marginRight: 20, width: "125px" }}>
                <span style={{ fontSize: 14 }}>Мин. срок доставки (дней)</span>
              </div>
              <div style={{ width: "125px" }}>
                <span style={{ fontSize: 14 }}>Макс. срок доставки (дней)</span>
              </div>
            </div>
          </div>

          <div className="DisplayFlexBlock">
            <div className="SelectedCity">
              <div className="selectCity_1">
                <img src={polygon2} alt="" />
                <div>
                  <input type="checkbox" />
                  <span style={{ fontSize: 14 }}>Центральный Округ</span>
                </div>
              </div>

              <div className="selectedCity_2">
                <img src={polygon2} alt="" />
                <div>
                  <input type="checkbox" />
                  <span style={{ fontSize: 14 }}>
                    Северо-Западный федеральный округ
                  </span>
                </div>
              </div>

              <div className="selectedCity_3">
                <img src={polygon2} alt="" />
                <div>
                  <input type="checkbox" />
                  <span style={{ fontSize: 14 }}>Ленинградская обл.</span>
                </div>
              </div>

              <div className="selectedCity_4">
                <img src={polygon2} alt="" />
                <div>
                  <input type="checkbox" />
                  <span style={{ fontSize: 14 }}>Калининградская обл.</span>
                </div>
              </div>

              <div className="selectCity_5">
                <input type="checkbox" />
                <span style={{ fontSize: 14 }}>
                  Другие места доставки в области
                </span>
              </div>

              <div className="selectCity_6">
                <input type="checkbox" />
                <span style={{ fontSize: 14 }}>Калининград</span>
              </div>

              <div className="selectCity_7">
                <img src={polygon2} alt="" />
                <div>
                  <input type="checkbox" />
                  <span style={{ fontSize: 14 }}>
                    Приволжский федеральный округ
                  </span>
                </div>
              </div>
            </div>
            {/*<div className="Count_Days_Delivery">*/}
            {/*  <div className="Count_Min_Days">*/}
            {/*    <div className="Federal_okr">*/}
            {/*      <div className="minus" onClick={handleMinus}>*/}
            {/*        <span>-</span>*/}
            {/*      </div>*/}

            {/*      <div className="count_Total">*/}
            {/*        <span>{minDays}</span>*/}
            {/*      </div>*/}

            {/*      <div className="plus" onClick={handlePlus}>*/}
            {/*        <span>+</span>*/}
            {/*      </div>*/}
            {/*    </div>*/}

            {/*    <div className="Federal_okr">*/}
            {/*      <div className="minus" onClick={handleMinus}>*/}
            {/*        <span>-</span>*/}
            {/*      </div>*/}

            {/*      <div className="count_Total">*/}
            {/*        <span>{minDays}</span>*/}
            {/*      </div>*/}

            {/*      <div className="plus" onClick={handlePlus}>*/}
            {/*        <span>+</span>*/}
            {/*      </div>*/}
            {/*    </div>*/}

            {/*    <div className="Federal_okr">*/}
            {/*      <div className="minus" onClick={handleMinus}>*/}
            {/*        <span>-</span>*/}
            {/*      </div>*/}

            {/*      <div className="count_Total">*/}
            {/*        <span>{minDays}</span>*/}
            {/*      </div>*/}

            {/*      <div className="plus" onClick={handlePlus}>*/}
            {/*        <span>+</span>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="Federal_okr">*/}
            {/*      <div className="minus" onClick={handleMinus}>*/}
            {/*        <span>-</span>*/}
            {/*      </div>*/}

            {/*      <div className="count_Total">*/}
            {/*        <span>{minDays}</span>*/}
            {/*      </div>*/}

            {/*      <div className="plus" onClick={handlePlus}>*/}
            {/*        <span>+</span>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="Federal_okr">*/}
            {/*      <div className="minus" onClick={handleMinus}>*/}
            {/*        <span>-</span>*/}
            {/*      </div>*/}

            {/*      <div className="count_Total">*/}
            {/*        <span>{minDays}</span>*/}
            {/*      </div>*/}

            {/*      <div className="plus" onClick={handlePlus}>*/}
            {/*        <span>+</span>*/}
            {/*      </div>*/}
            {/*    </div>*/}

            {/*    <div className="Federal_okr">*/}
            {/*      <div className="minus" onClick={handleMinus}>*/}
            {/*        <span>-</span>*/}
            {/*      </div>*/}

            {/*      <div className="count_Total">*/}
            {/*        <span>{minDays}</span>*/}
            {/*      </div>*/}

            {/*      <div className="plus" onClick={handlePlus}>*/}
            {/*        <span>+</span>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="Count_delivery_Max_Day">
              <div className="Count_Max_Days">
                <div className="Federal_okr">
                  <div className="minus">
                    <span>-</span>
                  </div>

                  {/*<div className="count_Total">*/}
                  {/*  <span>{maxDays}</span>*/}
                  {/*</div>*/}

                  <div className="plus">
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step3;
