const initialState = {
    courses: [],
  };
  
  const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "COURSE":
        return {
          ...state,
          courses: [...state.courses, action.payload],
        };

      default:
        return state;
    }
  };
  export default coursesReducer;
  