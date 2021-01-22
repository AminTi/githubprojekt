import React, { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContextProvider";

function FetchJobs({ apiKey }) {
  const { JobsData, setJobsData, ids, setId } = useContext(UserContext);

  const url = ` https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=java`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setJobsData(data));
  }, []);

  console.log(apiKey);

  return (
    <div>
      <ul>
        {JobsData &&
          JobsData.map((items) => {
            return <li key={items.id}> {items.title}</li>;
          })}
      </ul>
    </div>
  );
}

export default FetchJobs;
