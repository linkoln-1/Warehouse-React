const initialState = {
  WarehouseInfo: {},
  loading: false,
};

export default function InfoWarehouseReducer(state = initialState, action) {
  switch (action.type) {
    case "Warehouse/load/start":
      return {
        ...state,
        loading: true,
      };
    case "Warehouse/load/success":
      return {
        ...state,
        WarehouseInfo: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
