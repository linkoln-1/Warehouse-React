const initialState = {
 WarehouseInfo: [],
 loading: false,
};

export default function InfoWarehouseReducer(state = initialState, action) {
 switch (action.type) {
  case "WarehouseInfo/load/start":
   return {
    ...state,
    loading: true,
   };
  case "WarehouseInfo/load/success":
   return {
    ...state,
    WarehouseInfo: action.payload,
    loading: false,
   };
  default:
   return state;
 }
}
