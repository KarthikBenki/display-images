import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <div>
          <p>{props.name.substring(0,20)}</p>
          <p>{props.id}</p>
        </div>
        <img style={{ width: "200px" }} src={props.url} alt="" />
      </div>
    </div>
  );
};

export default Card;
