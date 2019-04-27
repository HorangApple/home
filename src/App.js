import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/nav/nav'
import Posts from './components/posts/posts'

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
              <Route exact path='/' component={ Posts } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
