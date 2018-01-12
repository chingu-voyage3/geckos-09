import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import NavMenu from "./NavMenu";
import HeaderRight from "./header-right";
import css from "../style/header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <AppBar
          title="Trello Lite"
          onLeftIconButtonClick={this.leftIconClick}
          iconElementLeft={<NavMenu />}
          onRightIconButtonClick={this.rightIconClick}
          iconElementRight={<HeaderRight />}
        />
      </div>
    );
  }
}

export default Header;
