export const warehouseInfo = () => {
  return (dispatch) => {
    dispatch({
      type: "Warehouse/load/start",
    });
    fetch(`/Warehouse`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "Warehouse/load/success",
          payload: json,
        });
      });
  };
};

export const WarehouseCardInfo = () => {
  return (dispatch) => {
    dispatch({
      type: "cardInfo/load/start",
    });
    fetch(`/address`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "cardInfo/load/success",
          payload: json,
        });
      });
  };
};

export const WarehouseProduct = () => {
  return (dispatch) => {
    dispatch({
      type: "WarehouseProduct/load/start",
    });
    fetch(`/productsList`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "WarehouseProduct/load/success",
          payload: data,
        });
      });
  };
};

//Доработка нужна
export const SaveCurrentInStock = (currentProduct) => {
  return (dispatch) => {
    dispatch({
      type: "save/load/start",
    });
    fetch(`/productsList`, {
      method: "POST",
      body: JSON.stringify({
        currentStockInMyWarehouse: currentProduct,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "save/load/success",
          payload: data,
        });
      });
  };
};
export const LoadRateCard = () => {
  return (dispatch) => {
    dispatch({
      type: "LoadRateCard/load/start",
    });
    fetch(`/monthly`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "LoadRateCard/load/success",
          payload: data,
        });
      });
  };
};
export const LoadAnnualCard = () => {
  return (dispatch) => {
    dispatch({
      type: "LoadAnnualCard/load/start",
    });
    fetch(`/annual`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "LoadAnnualCard/load/success",
          payload: data,
        });
      });
  };
};
