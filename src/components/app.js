import React, { Component } from 'react';
import Header from '../containers/header';

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
    )
  }
}




