import React from 'react'
import { Icon } from 'antd';

import './Login.scss'
import 'css/animate.css'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            account: "",
            password: "",
            accountPlaceholder: "手机号/邮箱",
            passwordPlaceholder: "密码",
            isAccountErrorMessageShow: false,
            isPasswordErrorMessageShow: false,
            isShakeAnimateShow: false
        }
    }

    render() {
        return (
            <div className="login-page">
                <div className="bg-bubble">
                    <img src={this.getImage("login-bg-bubble-01.png")} alt="login-bg-bubble" />
                    <img src={this.getImage("login-bg-bubble-02.png")} alt="login-bg-bubble" />
                    <img src={this.getImage("login-bg-bubble-03.png")} alt="login-bg-bubble" />
                    <img src={this.getImage("login-bg-bubble-04.png")} alt="login-bg-bubble" />
                </div>

                <div className="logo-and-slogan">
                    <img src={this.getImage("logo.svg")}></img>
                    <span className="slogan">时光序 | 最好用的时间管理工具</span>
                </div>

                <div className="login-content">
                    <div className="login-main">
                        <div className="avatar">
                            <img src={this.getImage("login-user-avatar.jpg")} alt="avatar" />
                        </div>
                        <div className={`info-form${this.state.isShakeAnimateShow ? " animated shake bounce fast" : ""}`}>
                            <div className="account-box">
                                <input
                                    onFocus={() => this.changePlacehoder("accountPlaceholder", "")}
                                    onBlur={() => this.changePlacehoder("accountPlaceholder", "手机号/邮箱")}
                                    onChange={(e) => this.handleAccountInput(e)}
                                    value={this.state.account}
                                    placeholder={this.state.accountPlaceholder}
                                    type="text" className="account" />
                                <span className={`error-message${this.state.isAccountErrorMessageShow ? "" : " hide-item"}`}>请输入手机号/邮箱</span>
                            </div>
                            <div className="password-box">
                                <input
                                    onFocus={() => this.changePlacehoder("passwordPlaceholder", "")}
                                    onBlur={() => this.changePlacehoder("passwordPlaceholder", "密码")}
                                    onChange={(e) => this.handlePasswordInput(e)}
                                    onKeyUp={(e) => { this.handlePasswordInputKeyUp(e) }}
                                    value={this.state.password}
                                    placeholder={this.state.passwordPlaceholder}
                                    type="password" className="password" />
                                <span className={`error-message${this.state.isAccountErrorMessageShow ? "" : " hide-item"}`}>请输入密码</span>
                                <Icon onClick={this.login} type="arrow-right" className="login-btn" />
                            </div>
                        </div>
                        <div className="register">
                            <span>忘记密码</span>
                            <span>立即注册</span>
                        </div>
                        <div className="login-type">
                            <div className="icon-box"><Icon onClick={this.loginByQQ} type="qq" /></div>
                            <div className="icon-box"><Icon onClick={this.loginByWechat} type="wechat" /></div>
                        </div>
                    </div>

                    <div className="about-link">
                        <span>广州奇创信息科技有限公司</span>
                        <a href="#">www.shiguangxu.com</a>
                        <span>2017-2019 © All Rights Reserved</span>
                        <img src={this.getImage("police-icon.png")} alt="police-icon" />
                        <a href="3">粤公网安备 44010602006951号</a>
                        <span>|</span>
                        <a href="#">粤ICP备 18009376号</a>
                    </div>
                </div>
            </div>
        );
    }

    changePlacehoder = (placeholderName, placeholderValue) => {
        if (placeholderName === "accountPlaceholder") {
            this.setState({
                "accountPlaceholder": placeholderValue
            });
            return false;
        }
        if (placeholderName === "passwordPlaceholder") {
            this.setState({
                "passwordPlaceholder": placeholderValue
            });
        }
    }

    handleAccountInput = (e) => {
        let accuontInputValue = e.currentTarget.value;
        this.setState({
            account: accuontInputValue
        });
    }

    handlePasswordInput = (e) => {
        let passwordInputValue = e.currentTarget.value;
        this.setState({
            password: passwordInputValue
        });
    }

    handlePasswordInputKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.login();
        }
    }

    login = () => {
        if(this.state.account === "fengzhen" && this.state.password === "123456") {
            console.log("账号：", this.state.account, "密码： ", this.state.password);
            console.log("----登陆成功----");
            this.setState({
                isAccountErrorMessageShow: false,
                isPasswordErrorMessageShow: false
            });
            return false;
        }
        this.setState({
            isShakeAnimateShow: false
        });
        setTimeout(() => {
            this.setState({
                isShakeAnimateShow: true,
                isAccountErrorMessageShow: true,
                isPasswordErrorMessageShow: true
            });
        }, 100)
    }

    loginByQQ = () => {
        console.log("使用QQ登陆");
    }

    loginByWechat = () => {
        console.log("使用微信登陆");
    }

    getImage(imageName) {
        return require(`images/${imageName}`);
    }
}

export default Login;