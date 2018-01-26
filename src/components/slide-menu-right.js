import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

class SlideMenuRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      boardName: this.props.board.boardName,
      teamName: this.props.board.teamName
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  getName = (event, name) => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = () => {
    this.props.update({
      boardName: this.state.boardName,
      teamName: this.state.teamName
    });
    this.handleClose();
  };

  handleCancel = () => {
    this.handleClose();
  };

  render() {
    return (
      <div className="slide-menu-right">
        <FlatButton label="Menu" onClick={this.handleOpen} />
        <Dialog
          title="Menu"
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <p>Change board name</p>

          <TextField
            hintText="Enter"
            floatingLabelText="Board name.."
            onBlur={event => this.getName(event, "boardName")}
          />
          <TextField
            hintText="Enter"
            floatingLabelText="Team name.."
            onBlur={event => this.getName(event, "teamName")}
          />
          <br />
          <FlatButton label="Submit" onClick={this.handleSubmit} />
          <FlatButton label="Cancel" onClick={this.handleCancel} />
        </Dialog>
      </div>
    );
  }
}

export default SlideMenuRight;
