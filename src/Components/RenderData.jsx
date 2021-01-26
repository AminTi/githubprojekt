import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function renderData({ DataObj }) {
  const renderElement = () => {
    if (DataObj.length === 0) {
      return <div className="warning"> No jobs found </div>;
    } else {
      return (
        <ul className="list">
          {DataObj &&
            DataObj.map((items) => {
              return (
                <li key={items.id}>
                  <Link
                    to={{ pathname: "/detailpage", state: { id: items.id } }}
                  >
                    {items.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      );
    }
  };

  return <>{renderElement()}</>;
}

export default renderData;
