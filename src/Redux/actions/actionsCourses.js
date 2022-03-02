export const course = (coursesArgs, courseArgs,placeArgs) => {
    return {
      type: "COURSE",
      payload: { courses: coursesArgs, course: courseArgs,place: placeArgs},
    };
  };
