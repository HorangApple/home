import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/nav/nav";
import Posts from "./components/posts/posts";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Route exact path="/" component={Posts} />
        <Switch>
        <Route path="/:sort" component={Posts} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
