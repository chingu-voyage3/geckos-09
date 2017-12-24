import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';
import Logout from './logout';
import Register from './register';
import Board from './board';
import Home from './home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} />
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
