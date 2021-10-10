import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "./Card";
import {WarehouseCardInfo, WarehouseProduct} from "../../../redux/actions";

function CardWarehouse(props) {
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(WarehouseCardInfo(props.item.warehouseExternalId));
  dispatch(WarehouseProduct(props.item.warehouseExternalId))
 }, [props.item.warehouseExternalId, dispatch])
 const CardInfo = useSelector(state => state.CardInfo.CardInfo);

 return (
   <div>
    {CardInfo === undefined ? "соединение с сервером" : (
      <div>
       {CardInfo.map((item,index) => {
        return <Card item={item} key={index} />
       })}
      </div>
    )}
   </div>
 );
}

export default CardWarehouse;
