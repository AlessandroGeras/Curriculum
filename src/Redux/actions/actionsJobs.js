export const job = (jobArgs, roleArgs, skillsArgs, startArgs, endArgs) => {
  return {
    type: "JOB",
    payload: {
      job: jobArgs,
      role: roleArgs,
      skills: skillsArgs,
      start: startArgs,
      end: endArgs,
    },
  };
};
