import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

class ListConstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      newListText: ""
    };
  }

  openListConstructor() {
    this.setState({ isOpen: true });
    console.log("isOpen:", this.state.isOpen);
  }

  closeListConstructor() {
    this.setState({ isOpen: false });
    this.setState({ newListText: "" });
    console.log("isOpen:", this.state.isOpen);
  }

  getNewListText(event) {
    this.setState({ newListText: event.target.value });
    console.log("list text: ", event.target.value);
  }
  setNewListText(event) {
    // this.setState({ newListText: event.target.value });
    this.setState({ newListText: this.state.newListText });
    console.log("setting list text", this.state.newListText);
  }
  renderListConstructor() {
    return (
      <span>
        <TextField
          hintText="List name"
          floatingLabelText="Add a list.."
          onChange={event => this.getNewListText(event)}
        />
        <FlatButton
          label="Submit"
          onClick={event => this.setNewListText(event)}
        />
        <FlatButton
          label="Cancel"
          onClick={() => this.closeListConstructor()}
        />
      </span>
    );
  }

  render() {
    let listText = null;

    return (
      <div>
        {!this.state.isOpen ? (
          <FlatButton
            label="Add a list..."
            onClick={() => this.openListConstructor()}
          />
        ) : null}
        {this.state.isOpen ? this.renderListConstructor() : null}
        <p>New List Header: {this.state.newListText}</p>
      </div>
    );
  }
}

export default ListConstructor;
