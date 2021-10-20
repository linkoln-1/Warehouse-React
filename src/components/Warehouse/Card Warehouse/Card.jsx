import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";
import redactingImage from "../../../images/Group 5.png";
import ClockImage from "../../../images/clock-circular-outline 1.png";
import calendarImage from "../../../images/calendar 1.png";

function Card(props) {
  const total = props.total;
  let mins = props.card.data.slaCutIn;
  let getTimeFromMins = () => {
    let hours = Math.trunc(mins / 60);
    return hours + "ч";
  };

  return (
    <div>
      <div className={styles.CardWarhouse}>
        <div className={styles.WarhouseKazanText}>
          <p>{props.card.data.warehouseName}</p>
          <div>
            <img style={{ marginRight: 16 }} src={redactingImage} alt="" />
          </div>
        </div>
        <div className="border-bottom">
          <p style={{ color: "#17A2B8" }}>
            {props.card.data.address.zipcode}, {props.card.data.address.country}
            ,{props.card.data.address.region},{props.card.data.address.city},{" "}
            {props.card.data.address.street} {props.card.data.address.house},{" "}
            {props.card.data.address.building}
          </p>
        </div>

        <div className={styles.Workhourse}>
          <div>
            <img src={ClockImage} alt="" />
            <span>{getTimeFromMins()} на сборку</span>
          </div>
          <div>
            <img src={calendarImage} alt="" />
            <span>Будни</span>
          </div>
        </div>

        {/*Нужно доработать еще*/}

        <div className={styles.ProductInStock}>
          <div>
            <span
              style={{
                marginRight: 5,
                fontSize: 30,
                color: "#17A2B8",
                fontWeight: 500,
              }}
            >
              230
            </span>
            <span style={{ fontWeight: 500, color: "#A5A5A5", fontSize: 25 }}>
              из 245
            </span>
            <div style={{ color: "#A5A5A5" }}>Отправлений сегодня</div>
          </div>

          <NavLink className={styles.productsinstock} to="/ProductIsInStock">
            <div>
              <span style={{ fontSize: 30, color: "#17A2B8", fontWeight: 500 }}>
                {total}
              </span>
              <div style={{ color: "#A5A5A5" }}>Товаров в наличии</div>
            </div>
          </NavLink>
        </div>
        <div className={styles.Methods}>
          <div>
            <span style={{ fontSize: 19, fontWeight: 500 }}>
              Методы доставки с этого склада:
            </span>
          </div>
          <div>
            <span
              style={{
                fontSize: 19,
                color: "#A5A5A5",
                fontWeight: 500,
                marginRight: 20,
              }}
            >
              Добавить
            </span>
          </div>
        </div>

        <div className={styles.AddMethods}>
          <div style={{ marginLeft: 20 }}>
            <span style={{ fontSize: 19, fontWeight: 400 }}>
              Самостоятельно, Казань
            </span>
          </div>

          <div style={{ marginRight: 145 }}>
            <span style={{ color: "#17A2B8", marginLeft: 10 }}>
              245 заказов
            </span>
          </div>

          <div>
            <img style={{ marginRight: 12 }} src={redactingImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
