import React, { useState } from "react";

function WorkingDays(props) {
  const [week, setWeek] = useState([
    { text: "ПН", select: false },
    { text: "ВТ", select: false },
    { text: "СР", select: false },
    { text: "ЧТ", select: false },
    { text: "ПТ", select: false },
    { text: "СБ", select: false },
    { text: "ВС", select: false },
  ]);

  const handleSelectDay = (i) => {
    const days = week.map((item, index) => {
      if (i === index) {
        return {
          ...item,
          select: !item.select,
        };
      }
      return item;
    });
    setWeek(days);
  };

  return (
    <div>
      <div className="row mt-3">
        <div className="col-7">
          <p>
            <b>Рабочие дни</b>
          </p>
          <p
            style={{
              padding: 0,
              margin: 0,
              color: "#A5A5A5",
              fontSize: "14px",
            }}
          >
            Выберите минимум 5 дней в неделю
          </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-10 d-flex justify-content-between">
          {week.map((day, index) => {
            return (
              <div
                className=" justify-content-between align-items-center"
                key={index}
              >
                <div
                  onClick={() => handleSelectDay(index)}
                  key={index}
                  className={`day_working ${
                    day.select ? "day_working_select" : ""
                  } `}
                >
                  {day.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkingDays;
