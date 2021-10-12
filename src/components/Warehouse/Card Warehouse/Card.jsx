import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";
import redactingImage from "../../../images/Group 5.png";
import ClockImage from "../../../images/clock-circular-outline 1.png";
import calendarImage from "../../../images/calendar 1.png";

function Card(props) {
  const product = props.product.map((item) => String(item.totalCount));
  return (
    <div>
      <div className={styles.CardWarhouse}>
        <div className={styles.WarhouseKazanText}>
          <p>{props.item.data.warehouseName}</p>
          <div>
            <img style={{marginRight:16}} src={redactingImage} alt="" />
          </div>
        </div>
        <div className="border-bottom">
          <p style={{ color: "#17A2B8" }}>
            {props.item.data.address.zipcode}, {props.item.data.address.country}
            ,{props.item.data.address.region},{props.item.data.address.city},{" "}
            {props.item.data.address.street} {props.item.data.address.house},{" "}
            {props.item.data.address.building}
          </p>
        </div>

        <div className={styles.Workhourse}>
          <div>
            <img src={ClockImage} alt="" />
            <span>{props.item.data.slaCutIn} минут</span>
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

          <NavLink
            className={styles.productsinstock}
            to="/ProductIsInStock"
          >
            <div>
              <span style={{ fontSize: 30, color: "#17A2B8", fontWeight: 500 }}>
                {product}
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
            <span style={{ fontSize: 19, color: "#A5A5A5", fontWeight: 500, marginRight:20 }}>
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
              <span style={{ color: "#17A2B8", marginLeft:10 }}>245 заказов</span>
            </div>

          <div>
            <img style={{marginRight:12}} src={redactingImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
