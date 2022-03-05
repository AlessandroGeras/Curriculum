export const project = (
  typeArgs,
  projectArgs,
  liveArgs,
  linkfrontendArgs,
  linkbackendArgs
) => {
  return {
    type: "PROJECT",
    payload: {
      type: typeArgs,
      project: projectArgs,
      live: liveArgs,
      linkfrontend: linkfrontendArgs,
      linkbackend: linkbackendArgs,
    },
  };
};
