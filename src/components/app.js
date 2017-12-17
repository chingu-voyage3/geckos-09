import React, { Component } from 'react';
import Header from './header';



export default class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <header>
                <Header user={user}/>
            </header>
            <main></main>
            <footer></footer>
        </div>
    );
  }
}
