import React, { useState } from "react";
import axios from "axios";
import "./login.css";

const Register = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3300/api/auth/register", {
        username: user.username,
        password: user.password
      })
      .then(function(response) {
        console.log(response);
        localStorage.setItem("user", response);
        props.history.push("/login");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const handleChanges = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={user.username}
          onChange={handleChanges}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChanges}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Register;
