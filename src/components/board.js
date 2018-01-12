import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMembers,
  getUser,
  getLists,
  getCards,
  getBoard
} from "../actions/index";
import { bindActionCreators } from "redux";
import _ from "lodash";
import List from "./list";
import BoardMenu from "./board-menu";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makeNewList: false
    };
  }

  wantsToMakeAList() {
    this.setState({ makeNewList: true });
  }
  closeMakeList() {
    console.log("Closing makeList()");
    this.setState({ makeNewList: false });
    console.log(this.state.makeNewList);
  }
  openMakeList() {
    return (
      <div>
        <input placeholder="List name" />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => this.closeMakeList()}>
          Cancel
        </button>
      </div>
    );
  }

  addList(event) {
    // return some jsx
    // event.preventDefault();

    if (event.which === 13) {
      console.log("you hit enter");
    } else {
      console.log("addList");
    }
  }
  render() {
    return (
      <div className="board">
        <BoardMenu board={this.props.board} />
        <button onClick={() => this.wantsToMakeAList()}>New List</button>
        {this.state.makeNewList ? this.openMakeList() : null}
      </div>
    );
  }
}

function mapStateToProps({ members, user, lists, cards, board }) {
  return { members, user, lists, cards, board };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMembers, getUser, getLists, getCards, getBoard },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
