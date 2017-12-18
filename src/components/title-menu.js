import React from "react";

export default function TitleMenu(props) {
    // Passing in 'props' allows us to grab the data from the parent
    // Note: 'this.props' is for smart components, 'props' is for dumb components
    return (
            <div className="header-container">
                <h4 className="header-title">Trello Lite</h4>
                <div className="header-info-wrap">
                    <div className="header-info">
                        <span>i</span>
                    </div>
                    <img className="header-icon imgs rounded-circle" src={props.user.icon}/>
                </div>
            </div>
        );
}