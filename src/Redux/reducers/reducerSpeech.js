const initialState = {
  speechs: [],
};

const speechsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SPEECH":
      return {
        ...state,
        speechs: [...state.speechs, action.payload],
      };

    default:
      return state;
  }
};
export default speechsReducer;
