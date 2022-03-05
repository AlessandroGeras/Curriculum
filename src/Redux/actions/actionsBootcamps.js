export const bootcamp = (
  typeArgs,
  bootcampArgs,
  workloadArgs,
  issuedateArgs,
  linkArgs
) => {
  return {
    type: "BOOTCAMP",
    payload: {
      type: typeArgs,
      bootcamp: bootcampArgs,
      workload: workloadArgs,
      issuedate: issuedateArgs,
      link: linkArgs,
    },
  };
};
