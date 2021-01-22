import React, { useState } from "react";

export const InputHook = () => {
  const [jobs, setJobs] = useState("");
  const [stringFix, setStringfix] = useState("");

  const ClickHandler = () => {
    const splitString = jobs.split(" ").join("+");
    setStringfix(splitString);
  };
  return { jobs, setJobs, ClickHandler, stringFix };
};
