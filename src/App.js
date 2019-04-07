import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import Main from './Main';
import Login from './Login';

class App extends Component {
  state = {}

  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Main} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
