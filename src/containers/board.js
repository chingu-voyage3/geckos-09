import React, { Component } from "react";
import { connect } from "react-redux";
// I imported functions with the intent
// of passing them to the child components as needed
// but I may not need to import them all here en masse
import {
  getMembers,
  getUser,
  addList,
  addCard,
  getBoard,
  changeBoardInfo
} from "../actions/index";
import { bindActionCreators } from "redux";
import _ from "lodash";
import List from "../components/list";
import BoardMenu from "../components/board-menu";
import ListConstructor from "../components/list-constructor";
import css from "../style/component.css";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  setHeaderToStore(header) {
    this.props.addList(header);
  }

  render() {
    return (
      <div className="board-flex">
        <BoardMenu
          board={this.props.board}
          update={this.props.changeBoardInfo}
        />
        {_.map(this.props.lists, list => <List key={list.id} list={list} />)}
        <ListConstructor
          // Grabs state.initHeader and dispatches it to the redux store
          // The data returned from ListConstructor is available to board
          //via setHeaderToStore callback function
          store={header => this.setHeaderToStore(header)}
          lists={this.props.lists}
        />
      </div>
    );
  }
}

// All the objects in the redux store are available to board as props.members (etc)
function mapStateToProps({ members, user, lists, cards, board }) {
  return { members, user, lists, cards, board };
}
// These dispatch methods are what you'll need to send data to the redux store
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMembers, getUser, addList, getBoard, changeBoardInfo },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
