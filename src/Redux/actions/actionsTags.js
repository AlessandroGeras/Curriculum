export const tag = (tagArgs, idArgs) => {
  return {
    type: "TAG",
    payload: { tag: tagArgs, id: idArgs },
  };
};
