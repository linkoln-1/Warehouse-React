export const warehouseInfo = () => {
  return (dispatch) => {
    dispatch({
      type: "WarehouseInfo/load/start",
    });
    fetch(
      `http://212.193.50.181:8080/api/warehouse/manage?includeNonActive=true`
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "WarehouseInfo/load/success",
          payload: json,
        });
      });
  };
};

export const WarehouseCardInfo = (id) => {
  return (dispatch) => {
    dispatch({
      type: "cardInfo/load/start",
    });
    fetch(
      `http://212.193.50.181:8080//api/warehouse/manage/byExternal?externalId=${id}&marketplaceKind=Ozon `
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "cardInfo/load/success",
          payload: json,
        });
      });
  };
};

export const WarehouseProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: "WarehouseProduct/load/start",
    });
    fetch(
      `http://212.193.50.181:8080/api/warehouse/manage/${id}/products?kind=Ozon&page=1&pageSize=200`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "WarehouseProduct/load/success",
          payload: data,
        });
      });
  };
};

export const SaveCurrentInStock = (current, offerId, warehouseExternalId) => {
  return (dispatch) => {
    dispatch({
      type: "save/load/start",
    });
    fetch(`http://212.193.50.181:8080/api/warehouse/manage/products/remains`, {
      method:"POST",
      body: JSON.stringify({
        "stocks": [
          {
            "offerId": offerId,
            "stockCount": current,
            "warehouseExternalId": warehouseExternalId
          }
          ]
      }),
      headers: {
        'Content-Type': 'application/json',
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

