export const jobbutton = (args) => {
    return {
      type: "JOBBUTTON",
      payload:{job:args}
    };
  };

  export const skillbutton = (args) => {
    return {
      type: "SKILLBUTTON",
      payload:{skill:args}
    };
  };
  