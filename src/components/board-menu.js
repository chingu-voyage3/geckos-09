import React from "react";
import SlideMenuRight from "./slide-menu-right";
import css from "../style/board-menu.css";

/* The props are being passed from the redux store to header and then to BoardMenu */
export default function BoardMenu(props) {
  return (
    <div className="board-menu-container">
      <h4>{props.board.name}</h4>
      <h5>{props.board.teamName}</h5>
      <SlideMenuRight />
    </div>
  );
}
