import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <section className="header-container">
                <h4 className="header-title">Trello Lite</h4>
                <div className="header-info-wrap">
                    <div className="header-info">
                        <span>i</span>
                    </div>
                    <img className="header-icon imgs rounded-circle" src={this.props.user.icon}/>
                </div>
            </section>
        );
    }
}

function mapStateToProps({user}) {
    return {user}
}

export default connect(mapStateToProps)(Header);