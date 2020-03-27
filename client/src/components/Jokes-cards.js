import React from "react";
import "./jokes-cards.css";

const JokesCard = props => {
  return (
    <div className="jokes-container">
      <div className="jokes">{props.joke}</div>
    </div>
  );
};

export default JokesCard;
