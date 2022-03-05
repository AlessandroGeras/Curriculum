const initialState = {
  jobs: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "JOB":
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };

    default:
      return state;
  }
};
export default jobsReducer;
