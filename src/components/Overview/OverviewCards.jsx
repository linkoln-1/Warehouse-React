import React from "react";
import styles from "./Overview.module.css";
import user from "../../images/capture_20211028114612919 (2).bmp";
import settings from "../../images/settingsOverview.bmp";
import rubles from "../../images/rubles.bmp";
import barcode from "../../images/barcode.bmp";
import marketplays from "../../images/marketplays.bmp";
import pricelist from "../../images/priceList.bmp";
import productPackaging from "../../images/product packaging.bmp";
import ShipmentsAndWarehouses from "../../images/shipments and warehouses.bmp";
import OrdersAndSalesAnalytics from "../../images/orders and sales analytics..bmp";

function OverviewCards(props) {
  return (
    <div className={styles.OverviewCards}>
      <div className={styles.OpeningALegalEntityInABank}>
        <img src={user} alt="" />
        <div>открытие юрлица и р/с в банке</div>
      </div>

      <div className={styles.OverviewSettings}>
        <img src={settings} alt="" />
        <div>Настройки компании</div>
      </div>

      <div className={styles.OverviewRubles}>
        <img src={rubles} alt="" />
        <div>Запрос оборотных средств</div>
      </div>

      <div className={styles.OverviewBarcode}>
        <img src={barcode} alt="" />
        <div>Продукты</div>
      </div>

      <div className={styles.OverviewMarketPlays}>
        <img src={marketplays} alt="" />
        <div>Маркетплейсы</div>
      </div>

      <div className={styles.OverviewPriceList}>
        <img src={pricelist} alt="" />
        <div>Прайс-лист</div>
      </div>

      <div className={styles.OverviewProductPackaging}>
        <img src={productPackaging} alt="" />
        <div>Упаковка товара</div>
      </div>

      <div className={styles.OverviewShipmentsAndWarehouses}>
        <img src={ShipmentsAndWarehouses} alt="" />
        <div>Отгрузки и склады</div>
      </div>

      <div className={styles.OverviewOrdersAndSalesAnalytics}>
        <img src={OrdersAndSalesAnalytics} alt="" />
        <div>Заказы и аналитика продаж</div>
      </div>
    </div>
  );
}

export default OverviewCards;
