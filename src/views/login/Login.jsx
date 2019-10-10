import React from 'react'
import { Icon } from 'antd';

import './Login.scss'

class Login extends React.Component {

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

                        <div className="info-form">
                            <input type="text" placeholder="手机号/邮箱" className="account" />
                            <div className="password-box">
                                <input type="password" placeholder="密码" className="password" />
                                <Icon type="arrow-right" className="login-btn" />
                            </div>
                        </div>

                        <div className="register">
                            <span>忘记密码</span>
                            <span>立即注册</span>
                        </div>

                        <div className="login-type">
                            <div className="icon-box"><Icon type="qq" /></div>
                            <div className="icon-box"><Icon type="wechat" /></div>
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

    getImage(imageName) {
        return require(`images/${imageName}`);
    }
}

export default Login;