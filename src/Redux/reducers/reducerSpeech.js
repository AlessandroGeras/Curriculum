const speechReducer = (state = "", action) => {
  switch (action.type) {
    case "SPEECHONE":
      return {
        ...state,
        speechone: action.payload.speech,
      };
    case "SPEECHTWO":
      return {
        ...state,
        speechtwo: action.payload.speech,
      };
    case "SPEECHTHREE":
      return {
        ...state,
        speechthree: action.payload.speech,
      };
    default:
      return state;
  }
};
export default speechReducer;
