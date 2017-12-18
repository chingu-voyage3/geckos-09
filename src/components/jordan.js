import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getMembers, getUser, getLists, getCards, getBoard} from '../actions/index';
import { bindActionCreators } from 'redux';

class test extends Component{
    constructor(props) {
        super(props);


        this.props.getMembers();
        this.props.getUser();
        this.props.getLists();
        this.props.getBoard();
        console.log(this.props.members);

        this.renderMembers = this.renderMembers.bind(this);
    }

    renderMembers(member) {
        return (
            <li key={member.name} className="list-group-item">
                <img className="img-thumbnail imgs" src={member.icon} />
                {member.name}
            </li>
        );
    }

    // renderUser(user) {
    //     return (
    //         <li key={user.name}>
    //             <img className="img-responsive img-thumbnail" style="height: 200px, width: 200px" src={this.props.user.icon} />
    //         </li>
    //     );
    // }


    render () {
        return (
            <div>
                <section>
                    <ul className="list-group">
                        {_.map(this.props.members, this.renderMembers)}
                    </ul>
                </section>
                <section>
                    <ul className="list-group">
                        <li key={this.props.user.name}>
                            <img className="img-responsive img-thumbnail" src={this.props.user.icon} />
                        </li>
                    </ul>
                </section>


                    {/*User: {this.props.user.name} <img src={this.props.user.icon} />*/}
                    {/*List: {_.map(this.props.lists, list => list.name)}*/}
                    {/*Card: {_.map(this.props.cards, card => card.description)}*/}
                    {/*Board: {_.map(this.props.board, board => board.name)}*/}
            </div>
        );
    }
}

function mapStateToProps({members, user, lists, cards, board}) {
    return {members, user, lists, cards, board};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getMembers, getUser, getLists, getCards, getBoard}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(test);



