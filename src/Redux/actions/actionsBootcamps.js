export const bootcamp = (bootcampsArgs,bootcampArgs, workloadArgs,issuedateArgs,linkArgs) => {
    return {
      type: "BOOTCAMP",
      payload: { bootcamps:bootcampsArgs,bootcamp: bootcampArgs, workload: workloadArgs,issuedate: issuedateArgs,link:linkArgs},
    };
  };
