import React, { Component } from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import CardConstructor from "./card-constructor";
import TaskCard from "./card";
import css from "../style/component.css";

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-wrapper">
        <Card
          // Inline styling overrides class styling with material UI
          style={{
            backgroundColor: "#e2e4e6"
          }}
        >
          <CardHeader title={this.props.text.header} />
          <CardText expandable={false}>
            <TaskCard />
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
        {/* <div className="list-content">
          <div className="list-header">
            <p>{this.props.text.header}</p>
            <a className="open-card-constructor">
              <CardConstructor />
            </a>
            <a className="list-menu">...</a>
          </div>
          <div className="list-cards">
            <Card />
          </div> */}
        {/* <a className="card-constructor">Add a card</a> */}
        {/* </div> */}
      </div>
    );
  }
}

export default List;
