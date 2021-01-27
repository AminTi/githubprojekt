import React, { useState, useEffect, useContext } from "react";
import RenderData from "./RenderData";
import "../App.css";

import { UserContext } from "../contexts/UserContextProvider";

function Button({ inputValue }) {
  const { jobsData, setJobsData } = useContext(UserContext);

  let search = inputValue && inputValue.split(" ").join("+");

  const url = ` https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${search}`;

  const ClickHandler = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setJobsData(data));
  };

  useEffect(() => {
    ClickHandler();
  }, []);

  return (
    <>
      <button onClick={ClickHandler} className="button">
        search
      </button>
      <RenderData DataObj={jobsData} className="tester" />
    </>
  );
}

export default Button;
