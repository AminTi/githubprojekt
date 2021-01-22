import React, { createContext, useState } from "react";

export const UserContext = createContext({});

function UserContextProvider({ children }) {
  const [jobsData, setJobsData] = useState([]);
  const [ids, setId] = useState("");

  return (
    <UserContext.Provider value={{ jobsData, setJobsData, ids, setId }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
