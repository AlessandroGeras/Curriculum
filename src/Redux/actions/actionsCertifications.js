export const certification = (typeArgs, categoryArgs,certificationArgs,linkArgs) => {
    return {
      type: "CERTIFICATION",
      payload: { type: typeArgs, category: categoryArgs,certification: certificationArgs,link:linkArgs},
    };
  };
