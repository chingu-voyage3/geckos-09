import React, { Component } from "react";
import { connect } from "react-redux";
import { addCard, addList } from "../actions/index";
import { bindActionCreators } from "redux";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import CardConstructor from "./card-constructor";
import TaskCard from "./card";
import css from "../style/component.css";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [];
    }
  }

  addCardById(cardId) {
    this.state.cards.push(cardId);
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
          <CardHeader title={this.props.list.header} />
          <CardText expandable={false}>
            {_.map(this.props.cards, card => (
              <TaskCard key={card.id} text={card.text} />
            ))}
          </CardText>
          <CardActions>
            <CardConstructor
              id={this.props.list.id}
              cards={this.props.cards}
              store={this.props.addCard}
              addToList={this.addCardById}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

// All the objects in the redux store are available to board as props.members (etc)
function mapStateToProps({ cards }) {
  return { cards };
}
// These dispatch methods are what you'll need to send data to the redux store
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCard, addList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
