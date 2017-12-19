import React, { Component } from "react";
import {Modal, Button, Media} from 'react-bootstrap';


// TODO: Change this to a proper a class without breaking it
const ModalExample = React.createClass({
    getInitialState() {
        return { showModal: false };
    },

    close() {
        this.setState({ showModal: false });
    },

    open() {
        this.setState({ showModal: true });
    },

    render() {

        return (
            // JSX can only return one element so don't delete the div tag
            <div>
                {/*The info button the title-menu*/}
                <Button bsStyle="primary" className="imgs" onClick={this.open}>
                    i
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>About Us</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Media>
                            <Media.Left>
                                <img width={64} height={64} src="/imgs/gecko.png" alt="Image" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>Meet the 09 Geckos</Media.Heading>
                                <p>Trello Lite is a build-to-learn project made by Geckos team #9 as part of the third iteration of Chingu's Voyage project. The Voyage is a place for scrappy, ambitious, self-studying web developers build a project from scratch using cool new tech. We chose to learn React, Redux and Firebase for this 1.5 month project. </p>
                            </Media.Body>
                        </Media>
                        <h4>You can learn more about us here:</h4>
                        <p><a href="https://medium.com/chingu" alt="Chingu">Chingu</a></p>
                        <p><a href="https://github.com/chingu-voyage3/geckos-09">Our repo</a></p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    },
});

export default ModalExample;


