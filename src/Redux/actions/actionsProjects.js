export const project = (typeArgs, projectArgs,linkfrontendArgs,linkbackendArgs) => {
    return {
      type: "PROJECT",
      payload: { type: typeArgs, project: projectArgs,linkfrontend:linkfrontendArgs,linkbackend:linkbackendArgs},
    };
  };
