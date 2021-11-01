import React, { useState } from "react";
import styles from "./Rate.module.css";
import { useSelector } from "react-redux";

function RateCards(props) {
  const RateCards = useSelector((state) => state.LoadRateCard.RateCard);
  const AnnualCard = useSelector((state) => state.LoadAnnualCard.AnnualCard);
  const [Rate, setRate] = useState(["1 месяц", "12 месяцев"]);
  const [SelectBusinessMonth, setSelectBusinessMonth] = useState("");
  const [SelectBusinessAnnual, setSelectBusinessAnnual] = useState("");

  const handleSelectTimeZone = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    setRate(e.target.options[selectedIndex].value);
  };
  const handleSelectBusinessMonth = (index) => {
    setSelectBusinessMonth(index);
  };
  const handleSelectBusinessAnnual = (index) => {
    setSelectBusinessAnnual(index);
  };

  return (
    <div>
      <div className={styles.UpText}>
        Подключение тарифного плана ПО СеллерМАРКЕТ
      </div>

      <div className={styles.Text}>Ежемесячная подписка</div>
      <div className={styles.RateParent}>
        {RateCards.map((item, index) => {
          return (
            <div
              className={`${styles.RateCards} ${
                SelectBusinessMonth === index
                  ? styles.SelectBusinessMonthly
                  : ""
              } `}
              key={index}
              onClick={() => handleSelectBusinessMonth(index)}
            >
              <p>{item.activity}</p>
              <p>{item.price}</p>
              <p style={{ fontSize: "12px" }}>{item.forTime}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.DownText}>
        <p style={{ fontSize: "20px" }}>Годовая подписка</p>
        <p style={{ marginTop: "5px" }}>при выборе на год</p>
        <p className={styles.TwoMonthFree}>2 месяца в подарок</p>
      </div>
      <div className={styles.RateParent}>
        {AnnualCard.map((item, index) => {
          return (
            <div
              className={`${styles.RateCards} ${
                SelectBusinessAnnual === index
                  ? styles.SelectBusinessAnnual
                  : ""
              }`}
              key={index}
              onClick={() => handleSelectBusinessAnnual(index)}
            >
              <p>{item.activity}</p>
              <p>{item.price}</p>
              <p style={{ fontSize: "12px" }}>{item.forTime}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.PayLikeParentBlock}>
        Оплачивать как:
        <div className={styles.PayLike1}>
          <input type="radio" />
          <span>Физ.лицо</span>
        </div>
        <div className={styles.PayLike2}>
          <input type="radio" />
          <span>Со счета аккаунта. Баланс: 0 ₽</span>
        </div>
        <div className={styles.PayLike3}>
          <input type="radio" />
          <span>Банковской картой</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <select
            value={Rate}
            className={styles.SelectTimeZone}
            onChange={handleSelectTimeZone}
          >
            <option value="1 месяц">1 месяц</option>
            <option value="12 месяцев">12 месяцев</option>
          </select>
          <div style={{ marginTop: "16px", marginLeft: "20px" }}>
            Итого к оплате: ....
          </div>
        </div>
        <button
          style={{
            width: "110px",
            border: "2px solid #17a2b8",
            backgroundColor: "#17a2b8",
            color: "white",
            padding: "7px 10px 7px 12px",
            borderRadius: "3px",
            marginTop: "20px",
          }}
        >
          Оплатить
        </button>
      </div>
    </div>
  );
}

export default RateCards;
