import React, { useEffect, useState } from "react";
import axiosWithAuth from "./auth/axiosWithAuth";

const Jokes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/")
      .then(res => {
        console.log(res);
        setData(res.data);
      });
  }, []);
  return <div>This is the Jokes component</div>;
};

export default Jokes;
