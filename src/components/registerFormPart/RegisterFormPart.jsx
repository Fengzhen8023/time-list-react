import React from 'react'
import './RegisterFormPart.scss'
import { Icon } from 'antd';

class RegisterFormPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            phonePlaceholder: "手机号/邮箱",
            phoneErrorMessage: "请输入你的手机号码",
            isPhoneErrorMessageShow: false,
            isShakeAnimateShow: false,
            isInputBackSpace: false
        }
    }

    render() {
        return (
            <div className="register-main">
                <div className="register-title">欢迎注册</div>
                <div className={`info-form${this.state.isShakeAnimateShow ? " animated shake bounce fast" : ""}`}>
                    <div className="phone-box">
                        <input
                            onFocus={() => this.changePlacehoder("phonePlaceholder", "")}
                            onBlur={() => this.changePlacehoder("phonePlaceholder", "请输入手机号")}
                            onKeyDown={(e) => this.handleKeyDown(e)}
                            onChange={(e) => this.handlePhoneInput(e)}
                            value={this.state.phone}
                            placeholder={this.state.phonePlaceholder}
                            type="text" className="phone" />
                        <span className={`error-message${this.state.isPhoneErrorMessageShow ? "" : " hide-item"}`}>{this.state.phoneErrorMessage}</span>
                    </div>
                  
                </div>
                <div className="register-option">
                    <div className="return-option option-box">
                        <Icon type="arrow-left" />
                        <span>返回登陆</span>
                    </div>
                    <div
                        onClick={() => this.isGoToRegister()}
                        className="next-option option-box">
                        <span>下一步</span>
                        <Icon type="arrow-right" />
                    </div>
                </div>
            </div>
        );
    }

    changePlacehoder = (placeholderName, placeholderValue) => {
        if (placeholderName === "phonePlaceholder") {
            this.setState({
                "phonePlaceholder": placeholderValue
            });
            return false;
        }
        if (placeholderName === "passwordPlaceholder") {
            this.setState({
                "passwordPlaceholder": placeholderValue
            });
        }
    }

    handlePhoneInput = (e) => {
        let phoneInputValue = e.currentTarget.value;
        if(this.state.phone.length < 11 || this.state.isInputBackSpace) {
            this.setState({
                phone: phoneInputValue.replace(/[^0-9]/g, "")
            });
        }
    }

    handleKeyDown = (e) => {
        if(e.keyCode === 8) {
            this.setState({
                isInputBackSpace: true
            });
        } else {
            this.setState({
                isInputBackSpace: false
            });
        }
    }

    isGoToRegister = () => {
        if (this.state.phone === "13611112222") {
            console.log("手机符合要求： ", this.state.phone);
            this.setState({
                isPhoneErrorMessageShow: false,
            });
            return false;
        }

        if(this.state.phone.length < 1) {
            this.setState({
                "phoneErrorMessage": "请输入手机号"
            });
        } else {
            this.setState({
                "phoneErrorMessage": "手机号码格式不正确，请重新输入"
            });
        }

        this.setState({
            isShakeAnimateShow: false
        });
        setTimeout(() => {
            this.setState({
                isShakeAnimateShow: true,
                isPhoneErrorMessageShow: true,
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

export default RegisterFormPart;