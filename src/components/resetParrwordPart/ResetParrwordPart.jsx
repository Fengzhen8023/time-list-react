import React from 'react'
import './ResetParrwordPart.scss'
import { ArrowLeftOutlined } from '@ant-design/icons';
import Store from 'myRedux/Store';
import { createShowLoginPartAction } from 'myRedux/actionCreator';

class ResetParrwordPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            verificationCode: "",
            password: "",
            phonePlaceholder: "请输入手机号",
            verificationCodePlaceholder: "请输入验证码",
            passwordPlaceholder: "输入6~16位登录密码",
            phoneErrorMessage: "请输入手机号",
            verificationCodeErrorMessage: "请输入验证码",
            passwordErrorMessage: "请输入密码",
            getVericationCodeText: "获取验证码",
            isVerificationCodeErrorMessageShow: false,
            isPasswordErrorMessageShow: false,
            isPhoneErrorMessageShow: false,
            isPhoneAnimateShow: false,
            isShakeAnimateShow: false,
            isVerificationCodeShakeAnimateShow: false,
            isPasswordShakeAnimateShow: false,
            isInputBackSpace: false,
            isAgreementChecked: true,
        }
    }

    render() {
        return (
            <div className="register-main">
                <div className="register-title">忘记密码</div>
                <div className="register-step">
                    <div className="info-form">
                        <div className={`info-form password-box input-box${this.state.isPhoneAnimateShow ? " animated shake bounce fast" : ""}`}>
                            <input
                                onFocus={() => this.changePlacehoder("phonePlaceholder", "")}
                                onBlur={() => this.changePlacehoder("phonePlaceholder", "请输入手机号")}
                                onKeyDown={(e) => this.handleKeyDown(e)}
                                onChange={(e) => this.handlePhoneInput(e)}
                                value={this.state.phone}
                                placeholder={this.state.phonePlaceholder}
                                type="text" />
                            <span className={`error-message${this.state.isPhoneErrorMessageShow ? "" : " hide-item"}`}>{this.state.phoneErrorMessage}</span>
                        </div>
                        <div className={`info-form varification-code-box input-box${this.state.isVerificationCodeShakeAnimateShow ? " animated shake bounce fast" : ""}`}>
                            <input
                                className="varification-input"
                                onFocus={() => this.changePlacehoder("verificationCodePlaceholder", "")}
                                onBlur={() => this.changePlacehoder("verificationCodePlaceholder", "请输入验证码")}
                                onKeyDown={(e) => this.handleKeyDown(e)}
                                onChange={(e) => this.handleVerificationCodeInput(e)}
                                value={this.state.verificationCode}
                                placeholder={this.state.verificationCodePlaceholder}
                                type="text" />
                            <div className="getVericationCode">
                                <span className="pipe-symbol">|</span>
                                <span onClick={this.getVerication}>{this.state.getVericationCodeText}</span>
                            </div>
                            <span className={`error-message${this.state.isVerificationCodeErrorMessageShow ? "" : " hide-item"}`}>{this.state.verificationCodeErrorMessage}</span>
                        </div>

                        <div className={`info-form password-box input-box${this.state.isPasswordShakeAnimateShow ? " animated shake bounce fast" : ""}`}>
                            <input
                                onFocus={() => this.changePlacehoder("passwordPlaceholder", "")}
                                onBlur={() => this.changePlacehoder("passwordPlaceholder", "设置6~16位登录密码")}
                                onKeyDown={(e) => this.handleKeyDown(e)}
                                onChange={(e) => this.handlePasswordInput(e)}
                                value={this.state.password}
                                placeholder={this.state.passwordPlaceholder}
                                type="password" />
                            <span className={`error-message${this.state.isPasswordErrorMessageShow ? "" : " hide-item"}`}>{this.state.passwordErrorMessage}</span>
                        </div>

                        <div className="register-option">
                            <div className="return-option option-box">
                                <ArrowLeftOutlined />
                                <span onClick={this.gotoLogin}>返回登陆</span>
                            </div>
                            <div
                                onClick={() => this.confirmRegister()}
                                className="next-option option-box">
                                <span>确定</span>
                            </div>
                        </div>
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
        if (placeholderName === "verificationCodePlaceholder") {
            this.setState({
                "verificationCodePlaceholder": placeholderValue
            });
        }
        if (placeholderName === "passwordPlaceholder") {
            this.setState({
                "passwordPlaceholder": placeholderValue
            });
        }
    }

    handleVerificationCodeInput = (e) => {
        let verificationCodeInputValue = e.currentTarget.value;
        if(this.state.verificationCode.length < 4 || this.state.isInputBackSpace) {
            this.setState({
                verificationCode: verificationCodeInputValue.replace(/[^a-zA-Z0-9]/g, "")
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

    handlePasswordInput = (e) => {
        let passwordInputValue = e.currentTarget.value;
        if(this.state.password.length < 16 || this.state.isInputBackSpace) {
            this.setState({
                password: passwordInputValue
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

    getVerication = () => {
        this.setState({
            getVericationCodeText: "发送中 . . ."
        });
    }

    confirmRegister = () => {
        this.setState({
            isPhoneErrorMessageShow: false,
            isVerificationCodeShakeAnimateShow: false,
            isPasswordShakeAnimateShow: false
        }, () => {
            setTimeout(() => {
                if (this.state.phone === "13611112222") {
                    console.log("手机符合要求： ", this.state.phone);
                    this.setState({
                        isPhoneErrorMessageShow: false,
                        isPhoneAnimateShow: false
                    });
                } else if (this.state.phone.length === 0) {
                    this.setState({
                        phoneErrorMessage: "请输入手机号",
                        isPhoneErrorMessageShow: true,
                        isPhoneAnimateShow: true
                    });
                } else {
                    this.setState({
                        phoneErrorMessage: "手机号码格式不正确，请重新输入",
                        isPhoneErrorMessageShow: true
                    });
                }

                if(this.state.verificationCode.length === 0) {
                    this.setState({
                        isVerificationCodeShakeAnimateShow: true,
                        isVerificationCodeErrorMessageShow: true,
                        verificationCodeErrorMessage: "请输入验证码",
                    })
                } else if (this.state.verificationCode.length < 4) {
                    this.setState({
                        isVerificationCodeShakeAnimateShow: true,
                        isVerificationCodeErrorMessageShow: true,
                        verificationCodeErrorMessage: "请输入4位验证码",
                    })
                } else {
                    this.setState({
                        isVerificationCodeErrorMessageShow: false
                    })
                }

                if(this.state.password.length === 0) {
                    this.setState({
                        isPasswordShakeAnimateShow: true,
                        passwordErrorMessage: "请输入密码",
                        isPasswordErrorMessageShow: true
                    })
                } else if (this.state.password.length < 6) {
                    this.setState({
                        isPasswordShakeAnimateShow: true,
                        passwordErrorMessage: "请输入6-16位登录密码",
                        isPasswordErrorMessageShow: true
                    })
                } else {
                    this.setState({
                        isPasswordErrorMessageShow: false
                    })
                }

                // 验证码、密码、确认密码输入正确
                if (!this.state.isVerificationCodeErrorMessageShow && !this.state.isPasswordErrorMessageShow) {
                    console.log("输入正确，准备登陆");
                }
            }, 100);
        });

    }

    gotoLogin = () => {
        let type = createShowLoginPartAction();
        Store.dispatch(type);
    }
}

export default ResetParrwordPart;