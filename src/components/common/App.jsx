import Menu from "../Left Menu";
import styles from "./App.module.css";
import { Route, Switch } from "react-router-dom";
import Warehouse from "../Warehouse";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { warehouseInfo } from "../../redux/actions";
import ProductIsInStock from "../the product is in stock";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(warehouseInfo());
  }, [dispatch]);
  return (
    <div className={styles.App}>
      <Menu />
      <Switch>
        <Route exact path="/warehouse">
          <Warehouse />
        </Route>
        <Route path="/warehouse/ProductIsInStock">
          <ProductIsInStock />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
