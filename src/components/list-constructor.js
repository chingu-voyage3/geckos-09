import React, { Component } from "react";
import _ from "lodash";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

class ListConstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      initId: 0,
      newId: 0,
      initHeader: "",
      newHeader: ""
    };
  }

  openListConstructor() {
    this.setState({ isOpen: true });
  }

  closeListConstructor() {
    this.setState({ isOpen: false });
  }

  getNewHeader(event) {
    this.setState({ newHeader: event.target.value });
  }

  setNewHeader(event) {
    this.props.store({
        id: this.state.newId,
        header: this.state.newHeader
    });
    console.log(this.state.newId, this.state.newHeader);
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
          onChange={event => this.getNewHeader(event)}
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
    console.log(this.props.lists);
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
