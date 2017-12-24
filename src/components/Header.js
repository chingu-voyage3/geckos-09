import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import NavMenu from "./NavMenu";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <AppBar
          title="Trello Lite"
          onLeftIconButtonClick={this.leftIconClick}
          iconElementLeft={<NavMenu />}
        />
      </div>
    );
  }
}

export default Header;
