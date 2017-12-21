import React from 'react';

/* The props are being passed from the redux store to header and then to BoardMenu */
export default function BoardMenu(props) {
  return (
    <div className="board-menu-container">
      <h4>{props.board.name}</h4>
      <h5>{props.board.teamName}</h5>
      <h5>menu</h5> { /* This will open the board menu modal */ }
    </div>
  );
}
