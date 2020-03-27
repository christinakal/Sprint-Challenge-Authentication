import React from "react";
import "./navbar.css";
import { BrowserRouter as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="header-container">
        <h1>Jokes</h1>
      </div>
      <div className="list-container">
        <Link to="/">
          <p>Register</p>
        </Link>
        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="/jokes">
          <p>My Jokes</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
