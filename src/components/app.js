import React, { Component } from 'react';
import JordanCheckin from './jordan';
import SethApp from './seth';


export default class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <JordanCheckin />
            <SethApp />
        </div>
    );
  }
}
