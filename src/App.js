import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import Main from './Main';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';

class App extends Component {
  state = {}

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} /> 
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
