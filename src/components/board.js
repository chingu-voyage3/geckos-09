import React, { Component } from 'react';
import List from './list';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: {
        id: 0,
        text: "This is a card!"
      }
    }
  }
  render() {
    return (
      <div className="board">
        <List card={this.state.cards} />
      </div>
    );
  }
}

export default Board;
