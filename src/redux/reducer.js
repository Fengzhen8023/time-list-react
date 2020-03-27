import initState from './initState'
import { SHOW_LOGIN_PART, SHOW_REGISTER_PAERT, SHOW_RESET_PASSWORD_PART } from './actionType'

// 管理不同的状态，在登录页面、注册页面和修改密码页面中，显示一个页面
const Reducer = (state = initState, action) => {
    switch(action.type) {
        case SHOW_LOGIN_PART:
            state.isLoginPartShow = true;
            state.isRegisterPartShow = false;
            state.isResetPasswordPartShow = false;
            return state;
        case SHOW_REGISTER_PAERT:
            state.isLoginPartShow = false;
            state.isRegisterPartShow = true;
            state.isResetPasswordPartShow = false;
            return state;
        case SHOW_RESET_PASSWORD_PART:
            state.isLoginPartShow = false;
            state.isRegisterPartShow = false;
            state.isResetPasswordPartShow = true;
            return state;
        default:
            return state;
    }
}

export default Reducer;