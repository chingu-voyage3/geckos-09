import React, { Component } from "react";
import JordanCheckin from "./jordan";
import SethApp from './seth';
import JoeCheckin from "./joe";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <JordanCheckin />
        <JoeCheckin />
      </div>
        <div className="wrapper">
            <JordanCheckin />
            <SethApp />
            <JoeCheckin />
        </div>
    );
  }
}
