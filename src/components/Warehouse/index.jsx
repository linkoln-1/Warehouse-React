import React from 'react';
import styles from "./Warehouse.module.css";
import HeaderWarehouse from "./HeaderWarehouse";
import NavigationWarehouse from "./NavigationWarehouse";
import AddWarehouseButton from "./AddWarehouseButton";
import CardWarehouse from "./Card Warehouse";
import {useSelector} from "react-redux";

function Warehouse(props) {
 const info = useSelector(state => state.warehouseInfo.WarehouseInfo.data)
 return (
   <div className={styles.Warehouse}>
    <HeaderWarehouse />
    <NavigationWarehouse />
    <AddWarehouseButton />
    {info === undefined ? "loading false" : (
      <div>
       {info.map((item,index) => {
        return <CardWarehouse item={item} key={index}/>
       })}
      </div>
    )}
   </div>
 );
}

export default Warehouse;
