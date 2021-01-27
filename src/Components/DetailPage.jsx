import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContextProvider";
import "../App.css";

function DetailPage(props) {
  const { jobsData } = useContext(UserContext);
  const id = props.location.state.id;

  const data = jobsData.filter((item) => {
    return item.id == id;
  });

  return (
    <div className="mainwrapepr">
      {data &&
        data.map((item, index) => {
          return (
            <div key={index} className="wrapper">
              <div className={"imgwrapper"}>
                <div className="img">
                  <img src={item.company_logo} className={"subimg"} />
                </div>
              </div>
              <h2 className="title">{item.title}</h2>

              <strong className="type">
                <a> {item.type} </a>
              </strong>
              <a href={item.company_url} className="website">
                Website
              </a>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
                className="description"
              ></div>
            </div>
          );
        })}
    </div>
  );
}

export default DetailPage;
