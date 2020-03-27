import React from 'react';
import './Sidebar.scss';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activebar: "record"
        }
    }

    render() {
        return (
            <div className="sidebar-component">
                <div className="sidebar-top">
                    <img src={this.getImage("logo.svg")} alt="logo" className="logo" />
                </div>

                <div className="sidebar-middle">
                    <div
                        onClick={() => this.setActivebar("record")}
                        className={`today-icon-box${this.state.activebar === "record" ? " active" : ""}`}>
                        <img
                            className={`record-icon-active${this.state.activebar === "record" ? "" : " hide-item"}`}
                            src={this.getImage("record-active.svg")} alt="record-icon" />
                        <img
                            className={`record-icon-active${this.state.activebar === "record" ? " hide-item" : ""}`}
                            src={this.getImage("record.svg")} alt="record-icon" />
                        <span>记录</span>
                    </div>

                    <div
                        onClick={() => this.setActivebar("today")}
                        className={`today-icon-box${this.state.activebar === "today" ? " active" : ""}`}>
                        <img
                            className={`today-icon-active${this.state.activebar === "today" ? "" : " hide-item"}`}
                            src={this.getImage("today-active.svg")} alt="today-icon" />
                        <img
                            className={`today-icon-active${this.state.activebar === "today" ? " hide-item" : ""}`}
                            src={this.getImage("today.svg")} alt="today-icon" />
                        <span>今日</span>
                    </div>
                </div>

                <div className="sidebar-bootom">
                    <img src={this.getImage("login-user-avatar.jpg")} alt="user-avatar" className="user-avatar" />
                </div>
            </div>
        )
    }

    setActivebar = (barName) => {
        this.setState({
            activebar: barName
        });
    }

    getImage = (imageName) => {
        return require(`images/${imageName}`);
    }

}

export default Sidebar;