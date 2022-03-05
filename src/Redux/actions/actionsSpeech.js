export const speech = (args) => {
  return {
    type: "SPEECH",
    payload: { speech: args },
  };
};
