import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import InfoWarehouseReducer from "./Reducers/InfoWarehouseReducer";
import InfoCard from "./Reducers/CardInfo";
import ProductWarehouse from "./Reducers/WarehouseProduct";
import SaveInfo from "./Reducers/SaveReducer";
import RateCard from "./Reducers/LoadRateCard";
import AnnualCard from "./Reducers/LoadAnnualCard";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  warehouseInfo: InfoWarehouseReducer,
  CardInfo: InfoCard,
  WarehouseProduct: ProductWarehouse,
  Save: SaveInfo,
  LoadRateCard: RateCard,
  LoadAnnualCard: AnnualCard,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
