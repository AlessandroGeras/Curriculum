const initialState = {
  projects: [],
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };

    default:
      return state;
  }
};
export default projectsReducer;
