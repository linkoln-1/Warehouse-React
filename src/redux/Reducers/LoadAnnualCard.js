const initialState = {
  AnnualCard: [],
  loading: false,
};

export default function AnnualCard(state = initialState, action) {
  switch (action.type) {
    case "LoadAnnualCard/load/start":
      return {
        ...state,
        loading: true,
      };
    case "LoadAnnualCard/load/success":
      return {
        ...state,
        AnnualCard: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
