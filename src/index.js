import React from "react";
import ReactDOM from "react-dom";
import App from "./components/common/App";
import { Provider } from "react-redux";
import store from "./redux/config";
import { BrowserRouter } from "react-router-dom";
import "./Global.css";
import "./components/Warehouse/Modal/Modal.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
