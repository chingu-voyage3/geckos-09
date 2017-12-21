import React, { Component } from 'react';
import Home from './home';
import Login from './login';
import Logout from './logout';
import Register from './register';
import Board from './board';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          <Route path="/board" component={Board} />
        </div>
      </Router>
    );
  }
}

export default App;
