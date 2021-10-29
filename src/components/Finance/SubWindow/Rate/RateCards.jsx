import React from "react";
import styles from "./Rate.module.css";
import { useSelector } from "react-redux";

function RateCards(props) {
  const RateCards = useSelector((state) => state.LoadRateCard.RateCard);
  const AnnualCard = useSelector((state) => state.LoadAnnualCard.AnnualCard);
  return (
    <div>
      <div className={styles.UpText}>
        Подключение тарифного плана ПО СеллерМАРКЕТ
      </div>

      <div className={styles.Text}>Ежемесячная подписка</div>
      <div className={styles.RateParent}>
        {RateCards.map((item, index) => {
          return (
            <div className={styles.RateCards} key={index}>
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
        <p
          style={{
            margin: "5px 0 0 5px",
            width: "160px",
            paddingTop: "2px",
            textAlign: "center",
            borderRadius: "50px",
            backgroundColor: "green",
            color: "white",
            height: "24px",
            fontSize: "14px",
          }}
        >
          2 месяца в подарок
        </p>
      </div>

      <div className={styles.RateParent}>
        {AnnualCard.map((item, index) => {
          return (
            <div className={styles.RateCards} key={index}>
              <p>{item.activity}</p>
              <p>{item.price}</p>
              <p style={{ fontSize: "12px" }}>{item.forTime}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RateCards;
