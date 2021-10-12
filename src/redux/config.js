import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import InfoWarehouseReducer from "./Reducers/InfoWarehouseReducer";
import InfoCard from "./Reducers/CardInfo";
import ProductWarehouse from "./Reducers/WarehouseProduct";
import SaveInfo from "./Reducers/SaveReducer";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  warehouseInfo: InfoWarehouseReducer,
  CardInfo: InfoCard,
  WarehouseProduct: ProductWarehouse,
  Save: SaveInfo,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
