import React, { Component } from "react";
import { Link } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Header from "./Header";
import css from "../style/register.css";

class Register extends Component {
  render() {
    return (
      <div className="register">
        
        <form className="register-form">
          <h3 className="welcome">Welcome!</h3>
          <h5 className="link">
            Already registered? <Link to="/login">Login</Link>
          </h5>
          <TextField
            className="firstname"
            type="text"
            name="firstname"
            floatingLabelText="First Name"
          />
          <TextField
            className="lastname"
            type="text"
            name="lastname"
            floatingLabelText="Last Name"
          />
          <TextField
            className="email"
            type="email"
            name="email"
            floatingLabelText="email"
          />
          <TextField
            className="password"
            type="password"
            name="password"
            floatingLabelText="password"
          />
          <TextField
            className="confirmpassword"
            type="password"
            name="confirmpassword"
            floatingLabelText="confirm password"
          />
          <RaisedButton className="register-button">Register</RaisedButton>
        </form>
      </div>
    );
  }
}

export default Register;
