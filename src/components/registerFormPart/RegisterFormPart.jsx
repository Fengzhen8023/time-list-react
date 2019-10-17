import React from 'react'
import './RegisterFormPart.scss'
import { Icon } from 'antd';

class RegisterFormPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            verificationCode: "",
            password: "",
            rePassword: "",
            phonePlaceholder: "手机号/邮箱",
            verificationCodePlaceholder: "请输入验证码",
            passwordPlaceholder: "输入6~16位登录密码",
            rePasswordPlaceholder: "再次确认登录密码",
            phoneErrorMessage: "请输入你的手机号码",
            verificationCodeErrorMessage: "请输入验证码",
            passwordErrorMessage: "请输入密码",
            rePasswordErrorMessage: "请再次确认登录密码",
            isVerificationCodeErrorMessageShow: false,
            isrePasswordErrorMessageShow: false,
            isPasswordErrorMessageShow: false,
            isPhoneErrorMessageShow: false,
            isShakeAnimateShow: false,
            isVerificationCodeShakeAnimateShow: false,
            isPasswordShakeAnimateShow: false,
            isRePasswordShakeAnimateShow: false,
            isInputBackSpace: false,
            isAgreementChecked: true,
            currentStep: 1
        }
    }

    render() {
        return (
            <div className="register-main">
                <div className="register-title">欢迎注册</div>
                <div className={ `register-step register-step-01${this.state.currentStep === 1 ? "" : " hide-item"}` }>
                    <div className={`info-form${this.state.isShakeAnimateShow ? " animated shake bounce fast" : ""}`}>
                        <div className="phone-box input-box">
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

                <div className={ `register-step register-step-02${this.state.currentStep === 2 ? "" : " hide-item"}` }>
                    <div className="info-form">
                        <p className="phone-number">+86 {this.state.phone}</p>
                        <div className={`info-form varification-code-box input-box${this.state.isVerificationCodeShakeAnimateShow ? " animated shake bounce fast" : ""}`}>
                            <input
                                onFocus={() => this.changePlacehoder("verificationCodePlaceholder", "")}
                                onBlur={() => this.changePlacehoder("verificationCodePlaceholder", "请输入验证码")}
                                onKeyDown={(e) => this.handleKeyDown(e)}
                                onChange={(e) => this.handleVerificationCodeInput(e)}
                                value={this.state.verificationCode}
                                placeholder={this.state.verificationCodePlaceholder}
                                type="text" />
                            <span className={`error-message${this.state.isVerificationCodeErrorMessageShow ? "" : " hide-item"}`}>{this.state.verificationCodeErrorMessage}</span>
                        </div>
                        <div className={`info-form password-box input-box${this.state.isPasswordShakeAnimateShow ? " animated shake bounce fast" : ""}`}>
                            <input
                                onFocus={() => this.changePlacehoder("passwordPlaceholder", "")}
                                onBlur={() => this.changePlacehoder("passwordPlaceholder", "输入6~16位登录密码")}
                                onKeyDown={(e) => this.handleKeyDown(e)}
                                onChange={(e) => this.handlePasswordInput(e)}
                                value={this.state.password}
                                placeholder={this.state.passwordPlaceholder}
                                type="password" />
                            <span className={`error-message${this.state.isPasswordErrorMessageShow ? "" : " hide-item"}`}>{this.state.passwordErrorMessage}</span>
                        </div>
                        <div className={`info-form re-password-box input-box${this.state.isRePasswordShakeAnimateShow ? " animated shake bounce fast" : ""}`}>
                            <input
                                onFocus={() => this.changePlacehoder("rePasswordPlaceholder", "")}
                                onBlur={() => this.changePlacehoder("rePasswordPlaceholder", "再次确认登录密码")}
                                onKeyDown={(e) => this.handleKeyDown(e)}
                                onChange={(e) => this.handleRePasswordInput(e)}
                                value={this.state.rePassword}
                                placeholder={this.state.rePasswordPlaceholder}
                                type="password" />
                            <span className={`error-message${this.state.isrePasswordErrorMessageShow ? "" : " hide-item"}`}>{this.state.rePasswordErrorMessage}</span>
                        </div>

                        <div className="agreement">
                            <span className="out-line" onClick={this.changeAgreementCheckStatus}>
                                <span 
                                    className={`in-circle${this.state.isAgreementChecked ? "" : " hide-item"}`}>
                                </span>
                            </span>
                            <span>我已认真阅读并同意</span>
                            <a href="#">《注册协议》</a>
                            <span className={`error-message${this.state.isAgreementChecked ? " hide-item" : ""}`}>请勾选</span>
                        </div>

                        <div className="register-option">
                            <div className="return-option option-box">
                                <Icon type="arrow-left" />
                                <span>返回登陆</span>
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
        if (placeholderName === "rePasswordPlaceholder") {
            this.setState({
                "rePasswordPlaceholder": placeholderValue
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

    handleVerificationCodeInput = (e) => {
        let verificationCodeInputValue = e.currentTarget.value;
        if(this.state.verificationCode.length < 4 || this.state.isInputBackSpace) {
            this.setState({
                verificationCode: verificationCodeInputValue.replace(/[^a-zA-Z0-9]/g, "")
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

    handleRePasswordInput = (e) => {
        let rePasswordInputValue = e.currentTarget.value;
        if(this.state.rePassword.length < 16 || this.state.isInputBackSpace) {
            this.setState({
                rePassword: rePasswordInputValue
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
                currentStep: 2
            });
            return false;
        }

        if(this.state.phone.length === 0) {
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

    confirmRegister = () => {
        if (!this.state.isAgreementChecked) {
            return false;
        }
        this.setState({
            isVerificationCodeShakeAnimateShow: false,
            isPasswordShakeAnimateShow: false,
            isRePasswordShakeAnimateShow: false,
        }, () => {
            setTimeout(() => {
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
                if(this.state.rePassword.length === 0) {
                    this.setState({
                        isrePasswordErrorMessageShow: true,
                        isRePasswordShakeAnimateShow: true,
                        rePasswordErrorMessage: "请再次确认登录密码"
                    })
                } else if (this.state.rePassword != this.state.password) {
                    this.setState({
                        isrePasswordErrorMessageShow: true,
                        isRePasswordShakeAnimateShow: true,
                        rePasswordErrorMessage: "两次密码输入不一致"
                    })
                } else if (this.state.rePassword.length < 6) {
                    this.setState({
                        isrePasswordErrorMessageShow: true,
                        isRePasswordShakeAnimateShow: true,
                        rePasswordErrorMessage: "请输入6-16位登录密码"
                    })
                } else {
                    this.setState({
                        isrePasswordErrorMessageShow: false,
                    })
                }

                // 验证码、密码、确认密码输入正确
                if (!this.state.isVerificationCodeErrorMessageShow && !this.state.isrePasswordErrorMessageShow && !this.state.isPasswordErrorMessageShow) {
                    console.log("输入正确，准备登陆");
                }



            }, 100);
        });

    }

    changeAgreementCheckStatus = () => {
        this.setState((preState, props) => ({
            isAgreementChecked: !preState.isAgreementChecked
        }));
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