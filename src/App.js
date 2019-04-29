import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/nav/nav";
import Posts from "./components/posts/posts";
import Post from "./components/posts/post";

const App = () => {
  return (
    <Router basename='/'>
      <div className="container">
        <Nav />
        <Route exact path='/' component={Posts} />
        <Switch>
          <Route exact path='/:sort' component={Posts} />
          <Route path='/:sort/:id' component={Post} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
