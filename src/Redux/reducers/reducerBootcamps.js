const initialState = {
  bootcamps: [],
};

const bootcampsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOTCAMP":
      return {
        ...state,
        bootcamps: [...state.bootcamps, action.payload],
      };

    default:
      return state;
  }
};
export default bootcampsReducer;
