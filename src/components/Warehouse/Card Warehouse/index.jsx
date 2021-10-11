import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { WarehouseCardInfo, WarehouseProduct } from "../../../redux/actions";

function CardWarehouse(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(WarehouseCardInfo(props.item.warehouseExternalId));
    dispatch(WarehouseProduct(props.item.warehouseExternalId));
  }, [props.item.warehouseExternalId, dispatch]);
  const CardInfo = useSelector((state) => state.CardInfo.CardInfo);
  const products = useSelector(
    (state) => state.WarehouseProduct.WarehouseProduct
  );
  const i = products.map((item) => item.data);

  return (
    <div>
      {CardInfo === undefined ? (
        "соединение с сервером"
      ) : (
        <div>
          {CardInfo.map((item, index) => {
            return <Card item={item} key={index} product={i} />;
          })}
        </div>
      )}
    </div>
  );
}

export default CardWarehouse;
