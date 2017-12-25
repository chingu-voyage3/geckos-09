import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

class AboutUs extends Component {
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
      <div className="AboutUs">
        <RaisedButton label="About Us" onClick={this.handleOpen} />
        <Dialog
          title="Meet the 09 Geckos"
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <p>
            Trello Lite is a build-to-learn project made by Geckos team #9 as
            part of the third iteration of Chingu's Voyage project. The Voyage
            is a place for scrappy, ambitious, self-studying web developers
            build a project from scratch using cool new tech. We chose to learn
            React, Redux and Firebase for this 1.5 month project.
          </p>
        </Dialog>
      </div>
    );
  }
}

export default AboutUs;
