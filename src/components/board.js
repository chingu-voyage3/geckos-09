import React, { Component } from 'react';
import List from './list';

class Board extends Component {
  render() {
    return (
      <div className="board">
        <List />
      </div>
    );
  }
}

export default Board;
