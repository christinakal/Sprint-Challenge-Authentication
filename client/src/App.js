import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from "./components/auth/PrivateRoute";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/jokes" component={Jokes} />
    </div>
  );
}

export default App;
