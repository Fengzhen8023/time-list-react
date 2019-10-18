import React from 'react';
import './Sidebar.scss';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activebar: "recode"
        }
    }

    render() {
        return (
            <div className="sidebar-part">
                <div className="sidebar-top">
                    <img src={this.getImage("logo.svg")} alt="logo" className="logo" />
                </div>

                <div className="sidebar-middle">
                    <div
                        onClick={() => this.setActivebar("recode")}
                        className={`today-icon-box${this.state.activebar === "recode" ? " active" : ""}`}>
                        <img
                            className={`recode-icon-active${this.state.activebar === "recode" ? "" : " hide-item"}`}
                            src={this.getImage("recode-active.svg")} alt="recode-icon" />
                        <img
                            className={`recode-icon-active${this.state.activebar === "recode" ? " hide-item" : ""}`}
                            src={this.getImage("recode.svg")} alt="recode-icon" />
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