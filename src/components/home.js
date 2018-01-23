import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase";
import Header from "./Header";
import Welcome from "./Welcome";

class Home extends Component {
  render() {
    const user = firebase.auth().currentUser;

    if (user != null) {
      let email = user.email;
      console.log(user);
    }

    return (
      <div className="home">
        <Header />
        <Welcome email={user} />
      </div>
    );
  }
}

export default Home;
