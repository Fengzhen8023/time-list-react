import { SHOW_LOGIN_PART, SHOW_REGISTER_PAERT, SHOW_RESET_PASSWORD_PART } from './actionType'

export function createShowLoginPartAction() {
    return {
        type: SHOW_LOGIN_PART
    }
}

export function createShowRegisterPartAction() {
    return {
        type: SHOW_REGISTER_PAERT
    }
}

export function createShowResetPasswordPartAction() {
    return {
        type: SHOW_RESET_PASSWORD_PART
    }
}