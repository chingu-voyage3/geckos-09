import React, { Component } from "react";
import { connect } from "react-redux";
import BoardMenu from "../components/board-menu";
import TitleMenu from "../components/title-menu";

class Header extends Component {
    render() {
        return (
            <section>
                {/*Passing the proper object to our child components*/}
                <TitleMenu user={this.props.user} />
                <BoardMenu board={this.props.board} />
            </section>
        );
    }
}


function mapStateToProps({user, board}) {
    // We're going to give Header access to the user and board objects from reducers/index.js
    return {user, board}
}

// Now we can pass that data to our child components
export default connect(mapStateToProps)(Header);