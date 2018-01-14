import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="user-info">
        <RaisedButton label="User Info" onClick={this.handleOpen} />
        <Dialog
          title="User info"
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <p>User info goes here</p>
        </Dialog>
      </div>
    );
  }
}

export default UserInfo;
