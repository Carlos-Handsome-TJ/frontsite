/**
 * 封状请求接口
 */

import axios from 'axios'

export const reqLogin = (username, password) => {
    axios({
        method: 'POST',
        url: '/login',
        data: {
            username,
            password
        }
    }).then(data => {

    }).catch(e => console.log(e))
}

//节流函数的封状：

export const debounce = (fn, delay) => {
    let timer = null
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay);
    }
}