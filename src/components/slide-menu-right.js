import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

class SlideMenuRight extends Component {
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
      <div className="slide-menu-right">
        <FlatButton label="Menu" onClick={this.handleOpen} />
        <Dialog
          title="Menu"
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <p>Slide Menu</p>
        </Dialog>
      </div>
    );
  }
}

export default SlideMenuRight;
