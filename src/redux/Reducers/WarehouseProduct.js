const initialState = {
  WarehouseProduct: [],
  loading: false,
};

export default function ProductWarehouse(state = initialState, action) {
  switch (action.type) {
    case "WarehouseProduct/load/start":
      return {
        ...state,
        loading: true,
      };
    case "WarehouseProduct/load/success":
      return {
        ...state,
        WarehouseProduct: [action.payload],
        loading: false,
      };
    default:
      return state;
  }
}
