import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div className="register">
        <form>
          <label>
            firstname:
            <input type="text" name="firstname" />
          </label>
          <label>
            lastname:
            <input type="text" name="lastname" />
          </label>
          <label>
            email:
            <input type="email" name="email" />
          </label>
          <label>
            password:
            <input type="password" name="password" />
          </label>
          <label>
            confirm password:
            <input type="password" name="confirmpassword" />
          </label>
        </form>
      </div>
    );
  }
}

export default Register;
