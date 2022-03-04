const aboutReducer = (state = "", action) => {
  switch (action.type) {
    case "ABOUTONE":
      return {
        ...state,
        aboutone: action.payload.about,
      };
    case "ABOUTTWO":
      return {
        ...state,
        abouttwo: action.payload.about,
      };
    case "ABOUTTHREE":
      return {
        ...state,
        aboutthree: action.payload.about,
      };
      case "ABOUTFOUR":
      return {
        ...state,
        aboutfour: action.payload.about,
      };
    default:
      return state;
  }
};
export default aboutReducer;
