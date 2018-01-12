import React, { Component } from "react";
import { connect } from "react-redux";
// I imported functions with the intent
// of passing them to the child components as needed
// but I may not need to import them all here en masse
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
import ListConstructor from "./list-constructor";

// I have plans to extract the makeList functionality into its own component
// it's cluttering the board a bit
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

    // This works when the user presses any key atm *bug*
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
        <List />
        <ListConstructor />
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
    { getMembers, getUser, getLists, getCards, getBoard },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
