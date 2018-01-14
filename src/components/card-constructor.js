import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

class CardConstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      initId: 0,
      id: 0,
      task: ""
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  getTask(event) {
    this.setState({
      id: ++this.state.initId,
      task: event.target.value
    });
  }

  handleSubmit() {
    this.props.store({
      id: this.state.id,
      listId: this.props.id,
      task: this.state.task
    });
  }
  s;

  handleCancel() {
    this.setState({
      id: this.state.initId,
      text: ""
    });
    this.handleClose();
  }
  renderCardConstructor() {
    return (
      <span>
        <TextField
          hintText="Todo"
          floatingLabelText="Add a task.."
          onBlur={event => this.getTask(event)}
        />
        <FlatButton label="Submit" onClick={() => this.handleSubmit()} />
        <FlatButton label="Cancel" onClick={() => this.handleCancel()} />
      </span>
    );
  }

  render() {
    console.log(this.props.store);
    console.log(this.props.cards);
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
