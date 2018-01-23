import React, { Component } from "react";
import _ from "lodash";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

class CardConstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      // initId for reset
      initId: 0,
      id: 0,
      text: ""
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  getTask = event => {
    this.setState({
      id: ++this.state.initId,
      text: event.target.value
    });
  };

  handleSubmit = () => {
    const { id, initId, text } = this.state;
    const { listId } = this.props;

    this.props.store({
      id,
      listId,
      text
    });

    this.setState({
      initId: id
    });

    this.handleClose();
  };

  revertChanges = () => {
    this.setState({
      // reset id to previous value
      id: this.state.initId,
      text: ""
    });
  }

  handleCancel = () => {
    this.revertChanges();
    this.handleClose();
  };

  renderCardConstructor = () => {
    return (
      <span>
        <TextField
          hintText="Todo"
          floatingLabelText="Add a task.."
          onBlur={event => this.getTask(event)}
        />
        <FlatButton label="Submit" onClick={this.handleSubmit} />
        <FlatButton label="Cancel" onClick={this.handleCancel} />
      </span>
    );
  };

  render() {
    return (
      <div className="card-constructor">
        <RaisedButton label="Add a task" onClick={this.handleOpen} />
        <Dialog
          title="Make a card"
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.state.open ? this.renderCardConstructor() : null}
        </Dialog>
      </div>
    );
  }
}

export default CardConstructor;
