import React, { Component } from "react";
import CardConstructor from "./card-constructor";
import css from "../style/component.css";

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-wrapper">
        <div className="list-content">
          <div className="list-header">
            <h4>Header</h4>
            <a className="open-card-constructor"><CardConstructor /></a>
            <a className="list-menu">...</a>
          </div>
          <div className="list-cards">List cards go here</div>
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
