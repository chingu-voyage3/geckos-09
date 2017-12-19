import React from "react";
import AboutUsModal from "./aboutus-modal";

export default function TitleMenu(props) {
    // Passing in 'props' allows us to grab the data from the parent
    // Note: 'this.props' is for smart components, 'props' is for dumb components
    return (
            <div className="header-container">
                <h4 className="header-title">Trello Lite</h4>
                <div className="header-info-wrap">
                    <AboutUsModal/>
                    <img className="header-icon imgs rounded-circle" src={props.user.icon}/>
                </div>
            </div>
        );
}