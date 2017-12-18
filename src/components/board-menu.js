import React from 'react';

export default function BoardMenu(props) {
    return (
        <div className="board-menu-container">
            <h4>{props.board.name}</h4>
            <h5>{props.board.teamName}</h5>
            <div className="slide-out-menu">
                menu
            </div>
        </div>
    )
}