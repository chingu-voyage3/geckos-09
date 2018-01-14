import React, { Component } from "react";
import _ from "lodash";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

class ListConstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      // InitId will never decrease, even if a list is deleted
      initId: 0,
      newId: 0,
      newHeader: ""
    };
  }

  openListConstructor() {
    this.setState({ isOpen: true });
  }

  closeListConstructor() {
    this.setState({ isOpen: false });
  }
  // Workaround for not having persistence yet
  getNewHeader(event) {
    this.setState({ newHeader: event.target.value });
  }
  // A callback from board.js that sends the list object
  // to the redux store
  setNewHeader(event) {
    this.props.store({
      id: this.state.newId,
      header: this.state.newHeader
    });
  }

  setListId() {
    this.setState({ newId: ++this.state.initId });
  }

  revertChanges() {
    this.setState({ newHeader: "" });
  }

  handleSubmit(event) {
    this.setNewHeader(event);
    this.setListId();
    this.closeListConstructor();
  }

  handleCancel() {
    this.revertChanges();
    this.setState({ newId: this.state.initId });
    this.closeListConstructor();
  }

  renderListConstructor() {
    return (
      <span>
        <TextField
          hintText="List name"
          floatingLabelText="Add a list.."
          onBlur={event => this.getNewHeader(event)}
        />
        <FlatButton
          label="Submit"
          onClick={event => this.handleSubmit(event)}
        />
        <FlatButton label="Cancel" onClick={() => this.handleCancel()} />
      </span>
    );
  }

  render() {
    return (
      <div>
        {!this.state.isOpen ? (
          <FlatButton
            label="Add a list..."
            onClick={() => this.openListConstructor()}
          />
        ) : null}
        {this.state.isOpen ? this.renderListConstructor() : null}
        <p>Now in redux:{_.map(this.props.lists, list => list.header)}</p>
      </div>
    );
  }
}

export default ListConstructor;
