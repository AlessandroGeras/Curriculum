const initialState = {
  tags: [],
};

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TAG":
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    default:
      return state;
  }
};
export default tagsReducer;
