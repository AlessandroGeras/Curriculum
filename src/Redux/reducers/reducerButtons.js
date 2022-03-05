const buttonReducer = (state = true, action) => {
  switch (action.type) {
    case "JOBBUTTON":
      return {
        ...state,
        job: action.payload.job,
      };
    case "SKILLBUTTON":
      return {
        ...state,
        skill: action.payload.skill,
      };
    default:
      return state;
  }
};
export default buttonReducer;
