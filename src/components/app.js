
import React, { Component } from 'react';
import Header from '../containers/header';


import React, { Component } from "react";
import JordanCheckin from "./jordan";
import SethApp from './seth';
import JoeCheckin from "./joe";


export default class App extends Component {
  render() {
    return (

        <div className="grid-container">
            <header className="header">
                <Header />
            </header>
            <main className="main"></main>
            <footer className="footer"></footer>
        </div>
    );
  }
}




