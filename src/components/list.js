import React, { Component } from "react";
import CardConstructor from "./card-constructor";
import Card from "./card";
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
            <p>{this.props.text.header}</p>
            <a className="open-card-constructor">
              <CardConstructor />
            </a>
            <a className="list-menu">...</a>
          </div>
          <div className="list-cards">
            <Card />
          </div>
          {/* <a className="card-constructor">Add a card</a> */}
        </div>
      </div>
    );
  }
}

export default List;
