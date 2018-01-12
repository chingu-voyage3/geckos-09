import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";


class ListConstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  openListConstructor() {
    this.setState({ isOpen: true });
    console.log("isOpen:", this.state.isOpen);
  }

  closeListConstructor() {
    this.setState({ isOpen: false });
    console.log("isOpen:", this.state.isOpen);
  }

  renderListConstructor() {
    return (
      <span>
        <TextField hintText="List name" floatingLabelText="Add a list.." />
        <FlatButton
          label="Cancel"
          onClick={() => this.closeListConstructor()}
        />
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
      </div>
    );
  }
}

export default ListConstructor;
