import React, { Component } from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class TaskCard extends Component {
  constructor(props) {
    super(props);
  }

  handleDelete = () => {
    const {cardId, listId, deleteCard} = this.props;
    // refactor obj
    const idToDelete = deleteCard({
      cardId: cardId,
      listId: listId
    })

    return idToDelete;

  }

  render() {
    console.log(this.props);
    return (
      <Card>
        <CardText expandable={false}>{this.props.text}</CardText>
        <CardActions>
          <FlatButton label="Edit" />
          <FlatButton
            label="Delete"
            onClick={this.handleDelete}
          />
        </CardActions>
      </Card>
    );
  }
}

export default TaskCard;
