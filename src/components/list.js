import React from "react";
import css from "../style/component.css";

export default function List(props) {
  return <div className="list-wrapper">
  <div className="list-content">
  <div className="list-header">Header</div>
  <div className="list-cards">List cards go here</div>
  </div>
  </div>;
}

//to finish this component
// connect data from Redux store
// use map state to props and connect function
