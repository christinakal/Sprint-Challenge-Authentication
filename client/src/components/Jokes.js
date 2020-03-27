import React, { useEffect, useState } from "react";
import axiosWithAuth from "./auth/axiosWithAuth";
import JokesCard from "./Jokes-cards";
import "./jokes.css";

const Jokes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/")
      .then(res => {
        console.log(res);
        setData(res.data);
        console.log(data);
      });
  }, data);
  return (
    <div>
      {data.map(element => (
        <JokesCard id={element.id} joke={element.joke} />
      ))}
    </div>
  );
};

export default Jokes;
