export const ACTION_SET_LOGIN = "set_login"
export const ACTION_SET_USERNAME = 'set_username'

export const isLogin = payload => ({
    type: ACTION_SET_LOGIN,
    payload
})
export const setUsername = payload => ({
    type: ACTION_SET_USERNAME,
    payload
})