export const certification = (certificationsArgs, typeArgs,certificationArgs,linkArgs) => {
    return {
      type: "CERTIFICATION",
      payload: { certifications: certificationsArgs, type: typeArgs,certification: certificationArgs,link:linkArgs},
    };
  };
