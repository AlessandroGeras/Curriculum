const initialState = {
    certifications: [],
  };
  
  const certificationsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CERTIFICATION":
        return {
          ...state,
          certifications: [...state.certifications, action.payload],
        };

      default:
        return state;
    }
  };
  export default certificationsReducer;
  