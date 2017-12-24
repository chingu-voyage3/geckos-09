import React, { Component } from "react";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import Menu from "material-ui/svg-icons/navigation/menu";

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div className="navmenu">
        <IconButton onClick={this.handleToggle}>
          <Menu color="white" />
        </IconButton>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem onClick={this.handleClose}>
            <Link to="/login">Log In</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to="/register">Register</Link>
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default NavMenu;
