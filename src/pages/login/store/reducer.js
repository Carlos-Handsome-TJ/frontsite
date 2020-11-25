import { ACTION_SET_LOGIN, ACTION_SET_USERNAME } from './index'

const defaultState = {
    isLogin: true,
    username: null
}
const loginReducer = (state = defaultState, action) => {
    let newState
    switch (action.type) {
        case ACTION_SET_LOGIN:
            newState = Object.assign({}, state);
            newState.isLogin = action.payload;
            return newState;
        case ACTION_SET_USERNAME:
            newState = Object.assign({}, state);
            newState.username = action.payload;
            return newState;
        default:
            return state;
    }
}
export default loginReducer
