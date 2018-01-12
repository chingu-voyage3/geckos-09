import React, { Component } from "react";
import CardConstructor from "./card-constructor";
import css from "../style/component.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Header"
    };
  }

  onChange = event => {
    this.setState({ header: event.target.value });
    console.log("header", event.target.value);
  };

  render() {
    return (
      <div className="list-wrapper">
        <div className="list-content">
          <div className="list-header">
            <input
              type="text"
              value={this.state.header}
              onChange={this.onChange}
            />
            <a className="open-card-constructor">
              <CardConstructor />
            </a>
            <a className="list-menu">...</a>
          </div>
          {/* <div className="list-cards">This is a card[{props.cards.id}]: {props.cards.text}</div> */}
          {/* <a className="card-constructor">Add a card</a> */}
        </div>
      </div>
    );
  }
}

export default List;

//to finish this component
// connect data from Redux store
// use map state to props and connect function
