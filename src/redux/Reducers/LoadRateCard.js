const initialState = {
  RateCard: [],
  loading: false,
};

export default function RateCard(state = initialState, action) {
  switch (action.type) {
    case "LoadRateCard/load/start":
      return {
        ...state,
        loading: true,
      };
    case "LoadRateCard/load/success":
      return {
        ...state,
        RateCard: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
