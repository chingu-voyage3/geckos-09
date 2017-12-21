import React, { Component } from 'react';
import Header from '../containers/header';

class Home extends Component {
    render() {
        return (
            <div className="grid-container">
                <Header/>
                <main className="main"/>
                <footer className="footer"/>
            </div>
        );
    }
}

export default Home;
