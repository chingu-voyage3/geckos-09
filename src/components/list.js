import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addCard,
  addList,
  deleteCard,
  deleteList,
  cascadeDelete
} from "../actions/index";
import { bindActionCreators } from "redux";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import CardConstructor from "./card-constructor";
import TaskCard from "./card";
import css from "../style/component.css";

class List extends Component {
  constructor(props) {
    super(props);
  }

  // Use arrow functions to bind the argument and maintain the context of this
  // It's the same as this.addCardById.bind(this, cardId)
  // If you bind the function inside JSX it will create new instances
  // upon rerendering

  renderCardsToList = (cards, list) => {
    const { id } = list;
    // REFACTOR: not sure if i need to use .size
    // REFACTOR: pass key and one all encompassing (ie. card or cardProps) prop to TaskCard
    // REFACTOR: shorted variable references where possible
    if (_.size(cards) !== 0) {
      return _.map(cards.byListId[id], card => {
        return (
          <TaskCard
            key={card.id}
            listId={id}
            cardId={card.id}
            text={card.text}
            deleteCard={this.props.deleteCard}
          />
        );
      });
    } else {
      return <p>No cards</p>;
    }
  };
  handleDelete = () => {
    const { list, deleteList, cascadeDelete } = this.props;

    deleteList({
      id: list.id
    });
    // get array of card id's belonging to list
    // delete all cards from list from redux state
    cascadeDelete({
      listId: list.id
    });
  };
  render() {
    const { deleteList, deleteCard, addCard, cards, list } = this.props;
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
            {cards !== null ? this.renderCardsToList(cards, list) : null}
          </CardText>
          <CardActions>
            <CardConstructor
              listId={this.props.list.id}
              cards={this.props.cards}
              store={this.props.addCard}
            />
            <FlatButton label="Delete" onClick={this.handleDelete} />
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
  return bindActionCreators(
    { addCard, deleteCard, addList, deleteList, cascadeDelete },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
