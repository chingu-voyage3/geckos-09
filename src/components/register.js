import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase";
import { ValidatorForm } from "react-form-validator-core";
import { TextValidator } from "react-material-ui-form-validator";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import Home from "./home";
import Header from "./Header";
import css from "../style/register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: ""
      },
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit() {
    this.setState({ submitted: true });
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.formData.email,
        this.state.formData.password
      )
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  render() {
    const { formData, submitted } = this.state;
    return (
      <div className="register">
        <ValidatorForm
          className="register-form"
          ref="form"
          onSubmit={this.handleSubmit}
        >
          <h3 className="welcome">Welcome!</h3>
          <h5 className="link">
            Already registered? <Link to="/login">Login</Link>
          </h5>
          <TextValidator
            floatingLabelText="email"
            onChange={this.handleChange}
            className="email"
            type="email"
            name="email"
            value={formData.email}
            validators={["required", "isEmail"]}
            errorMessages={["This field is required", "Invalid email"]}
          />
          <TextValidator
            floatingLabelText="password"
            onChange={this.handleChange}
            className="password"
            type="password"
            name="password"
            value={formData.password}
            validators={["required"]}
            errorMessages={["This field is required"]}
          />
          <TextValidator
            floatingLabelText="confirm password"
            onChange={this.handleChange}
            className="confirmpassword"
            type="password"
            name="confirmpassword"
            value={formData.confirmpassword}
            validators={["required"]}
            errorMessages={["This field is required"]}
          />
          <RaisedButton
            className="register-button"
            type="submit"
            label={submitted ? "Submitted!" : "Submit"}
            disabled={submitted}
          />
        </ValidatorForm>
      </div>
    );
  }
}

export default Register;
