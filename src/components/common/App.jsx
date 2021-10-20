import Menu from "../Left Menu";
import styles from "./App.module.css";
import { Route, Switch } from "react-router-dom";
import Warehouse from "../Warehouse";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { WarehouseCardInfo, warehouseInfo, WarehouseProduct} from "../../redux/actions";
import ProductIsInStock from "../the product is in stock";
function App() {
  const info = useSelector((state) => state.warehouseInfo.WarehouseInfo.data);
  const id = info?.map(item => item.warehouseExternalId)[12]
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(warehouseInfo());
  }, []);

useEffect(() => {
  if (info !== undefined) {
    dispatch(WarehouseCardInfo(id));
  }
},[info])

  useEffect(() => {
    if (info !== undefined) {
      dispatch(WarehouseProduct(id));
    }
  }, [info])


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
      </Switch>
    </div>
  );
}

export default App;
