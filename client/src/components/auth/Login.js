import React, { useState } from "react";
import axios from "axios";
import "./login.css";

const Login = props => {
  const [userState, setUserState] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3300/api/auth/login", userState)
      .then(response => {
        window.localStorage.setItem("token", response.data.token);
        props.history.push("/jokes");
      })
      .catch(err => console.log(err));
  };

  const handleChanges = e => {
    setUserState({ ...userState, [e.target.name]: e.target.value });
  };

  return (
    <div className="main-container">
      <div className="img-container">
        <img src={require("../../img/undraw_img.svg")} />
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={userState.username}
          onChange={handleChanges}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={userState.password}
          onChange={handleChanges}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
