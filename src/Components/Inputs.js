import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContextProvider";

function Inputs() {
  const [jobs, setJobs] = useState("");
  const [serach, setSerach] = useState("");

  const { jobsData, setJobsData, ids, setId } = useContext(UserContext);

  const url = ` https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${jobs}`;

  const ClickHandler = () => {
    jobs && jobs.split(" ").join("+");
    fetch(url)
      .then((response) => response.json())
      .then((data) => setJobsData(data));
    console.log(jobs);
  };
  console.log(jobs);
  useEffect(() => {
    ClickHandler();
  }, []);

  const renderElement = () => {
    if (jobsData.length === 0) {
      return <div> Amin Titi</div>;
    } else {
      return (
        <ul>
          {jobsData &&
            jobsData.map((items) => {
              return (
                <li key={items.id}>
                  <Link to="/detailpage">{items.title}</Link>
                </li>
              );
            })}
        </ul>
      );
    }
  };

  return (
    <div>
      <input
        value={jobs}
        onChange={(e) => setJobs(e.target.value)}
        className="nameInput"
      />
      <button onClick={ClickHandler} className="button">
        Click
      </button>
      {renderElement()}
    </div>
  );
}

export default Inputs;
