import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContextProvider";
import Button from "./Button";
import "../App.css";

function Inputs() {
  const [jobs, setJobs] = useState("");
  const [serach, setSerach] = useState("");

  const { jobsData, setJobsData, ids, setId } = useContext(UserContext);

  return (
    <div className="mainwrapepr">
      <div className="wrapperInput">
        <input
          value={jobs}
          onChange={(e) => setJobs(e.target.value)}
          className="nameInput"
        />

        <Button inputValue={jobs} className="searchBtn" />
      </div>
    </div>
  );
}

export default Inputs;
