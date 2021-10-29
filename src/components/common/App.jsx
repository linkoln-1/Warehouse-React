import Menu from "../Left Menu";
import styles from "./App.module.css";
import { Route, Switch } from "react-router-dom";
import Warehouse from "../Warehouse";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import {
  WarehouseCardInfo,
  warehouseInfo,
  WarehouseProduct,
} from "../../redux/actions";
import ProductIsInStock from "../the product is in stock";
import Overview from "../Overview";
import Finance from "../Finance";
import TopUpYourBalance from "../Finance/SubWindow/TopUpYourBalance/TopUpYourBalance";
import Rate from "../Finance/SubWindow/Rate";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(warehouseInfo());
    dispatch(WarehouseCardInfo());
    dispatch(WarehouseProduct());
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <Menu />
      <Switch>
        <Route path="/warehouse">
          <Warehouse />
        </Route>
        <Route exact path="/ProductIsInStock">
          <ProductIsInStock />
        </Route>
        <Route exact path="/Overview">
          <Overview />
        </Route>
        <Route exact path="/Finance">
          <Finance />
        </Route>
        <Route path="/Finance/TopUpYourBalance">
          <TopUpYourBalance />
        </Route>
        <Route path="/Finance/Rate">
          <Rate />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
