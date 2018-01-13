import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

class ListConstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
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
    this.props.store(this.state.newHeader);
  }

  revertChanges() {
    this.setState({ newHeader: "" });
  }

  handleSubmit(event) {
    this.setNewHeader(event);
    this.closeListConstructor();
  }

  handleCancel() {
    this.revertChanges();
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
    return (
      <div>
        {!this.state.isOpen ? (
          <FlatButton
            label="Add a list..."
            onClick={() => this.openListConstructor()}
          />
        ) : null}
        {this.state.isOpen ? this.renderListConstructor() : null}
        <p>New List Header: {this.state.initHeader}</p>
        <p>Now in redux: {this.props.lists}</p>
      </div>
    );
  }
}

export default ListConstructor;
