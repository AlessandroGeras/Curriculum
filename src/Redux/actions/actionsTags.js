export const tag = (args, randomstring) => {
  return {
    type: "TAG",
    payload: { tag: args, id: randomstring },
  };
};
