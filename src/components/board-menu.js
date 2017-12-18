import React from 'react';

export default function BoardMenu(props) {
    return (
        <div className="board-menu-container">
            {/*The props are being passed from the redux store to header and then to BoardMenu*/}
            <h4>{props.board.name}</h4>
            <h5>{props.board.teamName}</h5>
            <div className="slide-out-menu">
                {/*This will be a link that opens the board menu modal*/}
                menu
            </div>
        </div>
    )
}