const initialState = {
  CardInfo: [],
  loading: false,
};

export default function InfoCard(state = initialState, action) {
  switch (action.type) {
    case "cardInfo/load/start":
      return {
        ...state,
        loading: true,
      };
    case "cardInfo/load/success":
      return {
        ...state,
        CardInfo: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
