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
