import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { WarehouseCardInfo, WarehouseProduct } from "../../../redux/actions";
import Modal from "../Modal/index";
import { Route } from "react-router-dom";

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
            return (
              <Card item={item} key={index} product={i} total={props.item} />
            );
          })}
        </div>
      )}
      <Route path={"/warehouse/add_warehouse"}>
        <Modal />
      </Route>
    </div>
  );
}

export default CardWarehouse;
