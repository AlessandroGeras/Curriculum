export const course = (coursesArgs, courseArgs,placeArgs,issuedateArgs) => {
    return {
      type: "COURSE",
      payload: { courses: coursesArgs, course: courseArgs,place: placeArgs,issuedate:issuedateArgs},
    };
  };
