const initialState = {
  Save: [],
  loading: false,
};

export default function SaveInfo(state = initialState, action) {
  switch (action.type) {
    case "save/load/start":
      return {
        ...state,
        loading: true,
      };
    case "save/load/success":
      return {
        ...state,
        Save: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
