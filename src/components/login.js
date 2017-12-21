import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import BoardMenu from '../components/board-menu';
import TitleMenu from '../components/title-menu';
import css from '../style/login.css';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <AppBar
          title="Trello Lite"
          className="header"
        />
        <form className="login-form">
          <TextField
            className="login-email"
            type="email"
            name="email"
            floatingLabelText="email"
          />
          <TextField
            className="login-password"
            type="password"
            name="password"
            floatingLabelText="password"
          />
          <RaisedButton className="login-button">
            login
          </RaisedButton>
        </form>
      </div>
    );
  }
}

export default Login;
