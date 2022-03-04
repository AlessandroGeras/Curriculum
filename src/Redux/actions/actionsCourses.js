export const course = (typeArgs, courseArgs,placeArgs,issuedateArgs) => {
    return {
      type: "COURSE",
      payload: { type: typeArgs, course: courseArgs,place: placeArgs,issuedate:issuedateArgs},
    };
  };
