export const project = (projectsArgs, projectArgs,linkArgs) => {
    return {
      type: "PROJECT",
      payload: { projects: projectsArgs, project: projectArgs,link:linkArgs},
    };
  };
