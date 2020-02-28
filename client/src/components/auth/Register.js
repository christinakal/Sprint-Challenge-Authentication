import React, { useState } from "react";
import axios from "axios";
import "./login.css";

const Register = props => {
  const [userState, setUserState] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3300/api/auth/register", userState)
      .then(response => {
        window.localStorage.setItem("token", response.data.payload);
        // props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  const handleChanges = e => {
    setUserState({ ...userState, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
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

export default Register;
