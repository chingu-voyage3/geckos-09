import React, { Component } from 'react';
import Header from './Header';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
      </div>
    );
  }
}

export default Home;
