import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase";
import Header from "./Header";

class Home extends Component {
  render() {
    const user = firebase.auth().currentUser;

    if (user != null) {
      let email = user.email;
    }

    return (
      <div className="home">
        <Header />
      </div>
    );
  }
}

export default Home;
