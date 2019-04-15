import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import Main from './Main';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import Nav from './Components/Nav';
import { auth, db } from './lib/firebase';

class App extends Component {
  state = {
    user: undefined, // undefined: 로딩중, null: 로그인x, 둘다 아니면 로그인o
    data: {}
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ user });
    });
    db.ref('data').on('value', (snapshot) => {
      const data = snapshot.val();
      this.setState({ data });
    })
  }

  render() {
    const { user, data} = this.state;
    const withUser = Comp => props => <Comp {...props} data={data} user={user} />;
    return (
      <Router>
        <div>
          <Route component={Nav} />
          <Route exact path="/" component={withUser(Main)} />
          <Route path="/login" component={withUser(Login)} />
          <Route path="/signup" component={withUser(SignUp)} /> 
          <Route path="/profile" component={withUser(Profile)} />
        </div>
      </Router>
    );
  }
}

export default App;
